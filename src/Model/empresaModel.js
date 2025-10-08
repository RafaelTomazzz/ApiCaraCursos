import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const empresaSchema = z.object({
    cnpj: z.number({
        invalid_type_error: "O id deve ser um valor numérico",
        required_error: "O cnpj deve ser obrigatorio"
    }),

    nome: z.string({
        invalid_type_error: "O nome deve ser um valor tipo texto",
        required_error: "O nome deve ser obrigatorio"
    })
    .min(4, "Mínimo de 4 caracteres")
    .max(50, "Máximo de 4 caracteres"),

    email: z.string({
        invalid_type_error: "O email deve ser um valor tipo texto",
        required_error: "O email deve ser obrigatorio"
    })
    .min(15, "Mínimo de 15 caracteres")
    .max(50, "Máximo de 50 caracteres"),

    telefone: z.string({
        invalid_type_error: "O telefone deve ser um valor tipo texto",
        required_error: "O telefone deve ser obrigatorio"
    })
})

export const empresaValidator = (empresa, partial = null) => {
    if(partial){
        return empresa.empresaSchema.partial(partial).safeParse(empresa)
    }
    return empresaSchema.safeParse(empresa)
}

export async function createEmpresa(empresa) {
    const result = await prisma.empresa.create({
        data: empresa,
        select: {
            cnpj: true,
            nome: true,
            email: true,
            telefone:true,
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      );
    
      return safeResult;
}

export async function getAllEmpresa() {
    const result = await prisma.empresa.findMany({
        select: {
            cnpj: true,
            nome: true,
            email: true,
            telefone:true,
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === "bigint" ? v.toString() : v))
    );
    
    return safeResult;
}

export async function getByIdEmpresa(Cnpj) {
    const cnpj = BigInt(Cnpj) 

    const result = await prisma.empresa.findUnique({
        where:{
            cnpj: { cnpj }
        },

        select: {
            cnpj: true,
            nome: true,
            email: true,
            telefone:true,
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === "bigint" ? v.toString() : v))
    );
    
    return safeResult;
}

export async function deleteEmpresa(id) {
    const result = await prisma.empresa.delete({
        where: {
            id: id
        },
        select: {
            cnpj: true,
            nome: true,
            email: true,
            telefone:true,
        }
    })

    return result
}

export async function updateEmpresa(id, empresa) {
    const result = await prisma.empresa.update({
        where: {
            id: id
        }, 
        data: empresa,
        select: {
            cnpj: true,
            nome: true,
            email: true,
            telefone:true,
        }
    })
    
}