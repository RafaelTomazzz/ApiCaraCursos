import { getAula } from "../../Model/aulaModel.js";

export default async function getAulaController(req, res) {
    try {
        const { id } = req.params
        
        const result = await getAula(id)

        if(!result){
            return res.status(500).json({
                message: "Não foi possível achar a aula"
            })
        }

        return res.status(200).json({
            message: "Aula retornada com sucesso!",
            aula: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message,
            stack: er.stack
        })
    }
    
}