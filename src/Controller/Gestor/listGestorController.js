import { gestorValidator, listGestor } from "../../Model/gestorModel.js";

export default async function listGestorController(req, res) {
    try {
        const result = await listGestor()

        if (!result){
            return res.status(500).json({
                message: "Não foi possível listar os usuários"
            })       
        }

        return res.status(200).json({
            message: "Gestores listados com sucesso!",
            data: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            errors: er.message
        })
    }
}