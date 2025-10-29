import { deleteAluno, alunoValidator } from "../../Model/alunoModel.js";

export default async function deleteAlunoController(req, res) {
    try {
        const { cpf } = req.params
        const aluno = { cpf_usuario: +cpf }

        const { success, data, error } = await alunoValidator(aluno, { cargo: true, departamento: true, ultimo_acesso: true })

        if (!success) {
            return res.status(400).json({
                message: "Não foi possível validar o aluno",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await deleteAluno(+cpf)

        if (!result) {
            return res.status(500).json({
                message: "Não foi possível encontrar o aluno"
            })
        }

        return res.status(200).json({
            message: "Alnuo encontrado com sucesso",
            aluno: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })
    }
}