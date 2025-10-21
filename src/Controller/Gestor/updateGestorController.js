import { gestorValidator, updateGestor } from "../../Model/gestorModel.js";

export default async function update(req, res) {
    try {
        const gestor = req.body
        const { cpf } = req.params

        const { success, error, data } = await gestorValidator(gestor)

        if(!success) {
            return res.status(400).json({
                message: "Erro ao validar o gestor!",
                errors: error.flatten().fieldErrors
            })
        }
        
        const result = await updateGestor(gestor, cpf)

        if(!result){
            return res.status(500).json({
                message: "Erro ao achar o gestor!"
            }) 
        }

        return res.status(200).json({
            message: "Gestor alterado com sucesso",
            gestor: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })        
    }
}