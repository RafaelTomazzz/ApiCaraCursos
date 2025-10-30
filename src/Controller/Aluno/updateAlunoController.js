import { alunoValidator, updateAluno } from "../../Model/alunoModel.js"

export default async function updateAlunoController(req, res) {
    try {
        const { cpf } = req.params
        const aluno = req.body

        const { success, data, error } = await alunoValidator(aluno, { cpf_usuario: true, ultimo_acesso: true })
    
        if (!success) {
            return res.status(400).json({
                message: "Não foi possível validar o aluno",
                errors: error.flatten().fieldErrors
            })
        }
    
        const result = await updateAluno(+cpf, aluno)
    
        if(!result){
            return res.status(500).json({
                message: "Não foi possível atualizar aluno"
            })
        }
    
        return res.status(200).json({
            message: "Aluno atualizado co sucesso",
            aluno: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro",
            error: er.message,
            stack: er.stack
        })
    }
}