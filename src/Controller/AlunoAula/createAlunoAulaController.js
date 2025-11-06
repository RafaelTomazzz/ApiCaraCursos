import { createAlunoAula, alunoAulaValidator } from "../../Model/alunoAulaModel.js";

export default async function createAlunoAulaController(req, res) {
    try {
        const alunoAula = req.body
        const { success, data, error } = await alunoAulaValidator(alunoAula)

        if(!success){
            return res.status(400).json({
                message: "Não foi possível validar a AlunoAula",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await createAlunoAula(alunoAula)

        if(!result){
            return res.status(500).json({
                message: "Erro ao criar AlunoAula"
            })
        }

        return res.status(200).json({
            message: "AlunoAula criado com sucesso",
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