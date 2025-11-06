import { deleteAula, aulaValidator } from "../../Model/aulaModel.js";

export default async function deleteAulaController(req, res) {
    try {
        const { id } = req.params
        const aula = {id: +id}

        const { success, data, error } = await aulaValidator(aula, {titulo: true, video: true, imagem: true, duracao: true, material: true})

        if(!success) {
            return res.status(400).json({
                message: "Erro ao validar o aula!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await deleteAula(+id)

        return res.status(200).json({
            message: "Aula deletada com sucesso",
            aula: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!!!",
            error: er.message,
            stack: er.stack
        })
    }
}