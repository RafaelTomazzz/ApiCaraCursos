import { createAluno, alunoValidator } from "../../Model/alunoModel.js";

export default async function createAlunoController(req, res) {
    try {
        const aluno = req.body
        const { success, data, error } = await alunoValidator(aluno, {ultimo_acesso: true})

        if(!success){
            return res.status(400).json({
                message: "Não foi possível validar o aluno",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await createAluno(aluno)

        if(!result){
            return res.status(500).json({
                message: "Não foi possível criar aluno"
            })
        }

        return res.status(200).json({
            message: "Aluno criado com sucesso",
            aluno: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })       
    }
}