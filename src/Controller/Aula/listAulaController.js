import { listAula } from "../../Model/aulaModel.js";

export default async function listAulaController(req, res) {
    try {
        const result = await listAula()

        if(!result){
            return res.status(500).json({
                message: "Não foi possível listar as aulas"
            })
        }

        return res.status(200).json({
            message: "Aulas listadas com sucesso!",
            aulas: result
        })

    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message,
            stack: er.stack
        })
    }
}