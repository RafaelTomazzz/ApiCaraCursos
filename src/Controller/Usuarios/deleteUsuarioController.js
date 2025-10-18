import { deleteUsuario, usuarioValidator } from "../../Model/usuarioModel.js";

export default async function deleteUsuarioController(req, res) {
    try {
        const { cpf } = req.params

        const usuario = { cpf: +cpf}
        const { success, error, data} = usuarioValidator(usuario, {cnpj_empresa: true, nome: true, sobrenome: true, senha: true, telefone: true})
    
        if(!success) {
            return res.status(400).json({
                message: "Erro ao validar o usuário!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await deleteUsuario(+cpf)

        if(!result){
            return res.status(500).json({
                message: "Erro ao deletar o usuário!"
            })
        }

        return res.status(200).json({
            message: "Usuario deletado com sucesso",
            usuario: result
        })
    
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })
    }
}