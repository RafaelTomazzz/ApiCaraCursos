import { updateAula, aulaValidator } from "../../Model/aulaModel.js";

export default async function updateAulaController(req, res) {
    try {
        const { id } = req.params
        const aula = req.body

        const { success, error, data } = await aulaValidator(aula, { id: true })
        
        if(!success) {
            return res.status(400).json({
                message: "Erro ao validar o aula!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await updateAula(+id, aula)

        if(!result){
            return res.status(500).json({
                message: "Erro ao atualizar a aula"
            })
        }

        return res.status(200).json({
            message: "Aula atualizada com sucesso!",
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