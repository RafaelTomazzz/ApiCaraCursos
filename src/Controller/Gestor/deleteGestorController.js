import { tr } from "zod/locales"
import { gestorValidator, deleteGestor } from "../../Model/gestorModel.js"

export default async function deleteGestorController(req, res) {
    try {
        const { cpf } = req.params
        const gestor = { cpf_usuario: +cpf}

        const { success, error, data } = await gestorValidator(gestor, {departamento: true})

        if(!success) {
            return res.status(400).json({
                message: "Erro ao validar o gestor!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await deleteGestor(cpf)     
        
        return res.status(200).json({
            message: "Gestor deletado com sucesso!",
            gestor: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })        
    }

}