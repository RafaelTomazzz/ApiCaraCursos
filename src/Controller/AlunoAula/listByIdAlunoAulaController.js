import { listByIdAlunoAula, alunoAulaValidator } from "../../Model/alunoAulaModel.js";

export default async function listByIdAlunoAulaController(req, res) {
    try {
        const { id_aluno } = req.params
        const alunoAula = { id_aluno: id_aluno}

        const { success, data, error } = await alunoAulaValidator(alunoAula, { id_aula: true })

        if (!success) {
            return res.status(400).json({
                message: "Não foi possível validar a AlunoAula",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await listByIdAlunoAula(+id_aluno)

        if (!result) {
            return res.status(500).json({
                message: "Erro ao listar AlunoAula"
            })
        }

        return res.status(200).json({
            message: "AlunoAula listado com sucesso",
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