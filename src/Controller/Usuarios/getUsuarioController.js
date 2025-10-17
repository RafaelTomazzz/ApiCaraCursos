import { getUsuario, usuarioValidator } from "../../Model/usuarioModel.js";

export default async function getUsuarioController(req, res) {
    try{
        const { cpf } = req.params

        const usuario = { cpf: +cpf }
        const { success, error, data} = usuarioValidator(usuario, {cnpj_empresa: true, nome: true, sobrenome: true, senha: true, telefone: true})
    
        if(!success) {
            return res.status(400).json({
                message: "Erro ao validar o usuário!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await getUsuario(+cpf)

        if(!result){
            return res.status(500).json({
                message: "Erro ao achar o usuário!"
            })
        }

        return res.status(200).json({
            message: "Usuário encontrado com sucesso!",
            data: result
        })

    }catch(er){
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })
    }
}