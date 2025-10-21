import { gestorValidator, getGestor } from "../../Model/gestorModel.js";

export default async function getGestorController(req, res) {
    try {
        const { cpf } = req.params
        const gestor = { cpf_usuario: +cpf}

        const { success, error, data} = await gestorValidator(gestor, {departamento: true})

        if(!success) {
            return res.status(400).json({
                message: "Erro ao validar o gestor!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await getGestor(+cpf)

        if(!result){
            return res.status(500).json({
                message: "Erro ao achar o gestor!"
            })            
        }

        return res.status(200).json({
            message: "Gestor encontrado com sucesso!",
            gestor: result
        })
    
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })
    }
    
}