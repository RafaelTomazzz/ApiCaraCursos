import { PrismaClient } from "@prisma/client";
import z, { number } from "zod";

const prisma = new PrismaClient();

const usuarioValidatir = new z.object({
    cpf: z.number({
        invalid_type_error: "O cpf deve ser um valor numérico",
        required_error: "O cpf deve ser obrigatório"
    }),

    cnpj: z.string({
        invalid_type_error: "O id deve ser um valor tipo texto",
        required_error: "O cnpj deve ser obrigatorio"
    })
    .length(14, "O cnpj deve ter no 14 caracteres"),

    nome: z.string({
        invalid_type_error: "O nome deve ser um valor tipo texto",
        required_error: "O nome deve ser obrigatorio"
    })
    .max(20, "Nome deve ter no máximo 30 caracteres")
    .min(3,"O nome deve ter no mínimo 3 caracteres"),

    sobrenome: z.string({
        invalid_type_error: "O sobrenome deve ser um valor tipo texto",
        required_error: "O sobrenome deve ser obrigatorio"
    })
    .max(20, "O sobrenome deve ter no máximo 30 caracteres")
    .min(3,"O sobrenome deve ter no mínimo 3 caracteres"),

    senha: z.string({
        invalid_type_error: "A senha deve ser um valor tipo texto",
        required_error: "A senha deve ser obrigatória"
    })
    .max(20, "Senha deve ter no máximo 20 caracteres")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),

    telefone: z.number({
        invalid_type_error: "Telefone deve ser um valor numérico"
    })
})

export function createUsuario(usuario){
    const data = {
        cpf: BigInt(usuario.cpf)
    }

    const result = prisma.usuario .create({
        data: usuario,
        select: {
            cpf: true,
            cnpj_empresa: true,
            nome: true,
            sobrenome: true,
            senha: false,
            telefone: true
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return result
}