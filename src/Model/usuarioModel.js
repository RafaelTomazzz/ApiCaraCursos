import { PrismaClient } from "@prisma/client";
import z, { bigint, number } from "zod";

const prisma = new PrismaClient();

const usuarioSchema = new z.object({
    cpf: z.number({
        invalid_type_error: "O cpf deve ser um valor numérico",
        required_error: "O cpf deve ser obrigatório"
    }),

    cnpj_empresa: z.string({
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

    telefone: z.string({
        invalid_type_error: "Telefone deve ser um valor tipo texto"
    })
    .nullish()
})

export const usuarioValidator = (usuario, partial = null) => {
    if(partial){
        return usuarioSchema.partial(partial).safeParse(usuario)
    }

    return usuarioSchema.safeParse(usuario)
}

export async function createUsuario(usuario){
    const data = {
        cpf: BigInt(usuario.cpf),
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        senha: usuario.senha,
        telefone: usuario.telefone,
        cnpj_empresa: usuario.cnpj_empresa
    }

    const result = await prisma.Usuarios.create({
        data: data,
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

    return safeResult
}

export async function listUsuario(req, res) {
    const result = await prisma.Usuarios.findMany({
        select: {
            cpf: true,
            cnpj_empresa: true,
            nome: true,
            sobrenome: true,
            senha: false,
            telefone: true
        }
    })

    const safeResult =  JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function getUsuario(cpf) {
    const result = await prisma.Usuarios.findUnique({
        where: {
            cpf: cpf
        },
        select: {
            cpf: true,
            cnpj_empresa: true,
            nome: true,
            sobrenome: true,
            senha: false,
            telefone: true
        }
    })

    const safeResult =  JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function deleteUsuario(cpf) {
    const result = await prisma.Usuarios.delete({
        where: {
            cpf: cpf
        },
        select: {
            cpf: true,
            cnpj_empresa: true,
            nome: true,
            sobrenome: true,
            senha: false,
            telefone: true
        }
    })

    const safeResult =  JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function updateUsuario(usuario, cpf) {
    const data = {
        cpf: BigInt(usuario.cpf),
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        senha: usuario.senha,
        telefone: usuario.telefone,
        cnpj_empresa: usuario.cnpj_empresa
    }
    
    const result = await prisma.Usuarios.update({
        where: {
            cpf: BigInt(cpf)
        },
        data: data,
        select: {
            cpf: true,
            cnpj_empresa: true,
            nome: true,
            sobrenome: true,
            senha: false,
            telefone: true
        }
    })

    const safeResult =  JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}