import { createUsuario, usuarioValidator  } from "../../Model/usuarioModel.js"

export default async function createUsuarioController(req, res) {
    try{
        const usuario = req.body
        const { success, data, error } = usuarioValidator(usuario)

        if(!success){
            return res.status(400).json({
                message: "Não foi possível validar a usuário",
                errors: error.flatten().fieldErrors
            })
        }
            
        const result = await createUsuario(data)

        if(!result){
            return res.status(500).json({
                message: "Não foi possível criar a usuário"
            })
        }

        return res.status(200).json({
            message: "Usuario criado com sucesso!!!",
            data: result
        })

    }
    catch(er){
        return res.status(500).json({
            message: "Erro!",
            errors: er.message
        })
    }
}