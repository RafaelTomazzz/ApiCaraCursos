import { deleteAlunoAula, alunoAulaValidator } from "../../Model/alunoAulaModel.js";

export default async function deleteAlunoAulaController(req, res) {
    try {
        const alunoAula = req.body
        const { success, data, error } = await alunoAulaValidator(alunoAula)

        if (!success) {
            return res.status(400).json({
                message: "Não foi possível validar a AlunoAula",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await deleteAlunoAula(alunoAula.id_aluno, alunoAula.id_aula)

        if (!result) {
            return res.status(500).json({
                message: "Erro ao deletar AlunoAula"
            })
        }

        return res.status(200).json({
            message: "AlunoAula deletado com sucesso",
            alunoaula: result
        })


    } catch (er) {
        return res.status(500).json({
            message: "Erro!!!",
            error: er.message,
            stack: er.stack
        })
    }
}