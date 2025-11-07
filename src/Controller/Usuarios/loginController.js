import { getUsuarioSenha, usuarioValidator } from "../../Model/usuarioModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

export default async function loginController(req, res) {
    try {
        const { cpf } = req.params
        const { senha } = req.params

        const usuario_validator = { cpf: +cpf }
        const { success, data, error } = await usuarioValidator(usuario_validator, { cnpj_empresa: true, nome: true, sobrenome: true, senha: true, telefone: true })

        if (!success) {
            return res.status(400).json({
                message: "Erro ao validar o usuário!",
                errors: error.flatten().fieldErrors
            })
        }

        const usuario = await getUsuarioSenha(+cpf)

        if (!usuario) {
            return res.status(400).json({
                message: "Não foi possível encontrar o usuário"
            })
        }

        const senhaValidator = await bcrypt.compare(senha, usuario.senha)
        if(!senhaValidator){
            return res.status(400).json({
                message: "Senha ou CPF incorretos"
            })
        }

        const token = jwt.sign(
            {cpf: usuario.cpf},
            process.env.JWT_SECRET,
            { expiresIn: "24h"}
        )

        return res.status(200).json({
            message: "Login efetuado com sucesso",
            token: token
        })

    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            errors: er.message,
            stack: er.stack
        })
    }
}