import { updateUsuario, usuarioValidator } from "../../Model/usuarioModel.js"

export default async function updateUsuarioController(req, res) {
    try {
        const { cpf } = req.params
        console.log(cpf)

        const usuario = req.body
        const { success, error, data} = usuarioValidator(usuario)
            
        if(!success) {
            return res.status(400).json({
                message: "Erro ao validar o usuário!",
                errors: error.flatten().fieldErrors
            })
        }
    
        const result = await updateUsuario(usuario, +cpf)
        
        if(!result){
            return res.status(500).json({
                message: "Erro ao deletar o usuário!"
            })
        }

        return res.status(200).json({
            message: "Usuario alterado com sucesso",
            usuario: result
        })
        
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        }) 
    }
}