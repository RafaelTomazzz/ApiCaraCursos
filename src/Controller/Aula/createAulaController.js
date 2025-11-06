import { createAula, aulaValidator } from "../../Model/aulaModel.js"

export default async function createAulaController(req, res) {
    try {
        const aula = req.body
        const { success, error, data } = await aulaValidator(aula, {id: true})

        if(!success){
            return res.status(400).json({
                message: "Não foi possível validar a aula",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await createAula(aula)
        
        if(!result){
            return res.status(500).json({
                message: "Não foi possível criar a Aula"
            })
        }

        return res.status(200).json({
            message:"Aula criada com sucesso!",
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