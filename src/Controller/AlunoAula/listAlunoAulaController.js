import { listAlunoAula } from "../../Model/alunoAulaModel.js";

export default async function listAlunoAulaController(req, res) {
    try {
        const result = await listAlunoAula()

        if(!result){
            return res.status(500).json({
                message: "Não foi possível listar AlunoAula"
            })
        }

        return res.status(200).json({
            message: "AlunoAula listado com sucesso!",
            alunoaulas: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!!!",
            error: er.message,
            stack: er.stack
        })
    }
}