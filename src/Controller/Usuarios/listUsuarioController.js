import { listUsuario } from "../../Model/usuarioModel.js";

export default async function listUsuarioController(req, res){
    try{
        const result = await listUsuario()

        if(!result){
            return res.status(500).json({
                messag: "Não foi possível listar os usuários"
            })
        }

        return res.status(200).json({
            message: "Usuários listados com sucesso!",
            data: result
        })
    } catch(er){
        return res.status(500).json({
            message: "Erro!",
            errors: er.message
        })
    }
}