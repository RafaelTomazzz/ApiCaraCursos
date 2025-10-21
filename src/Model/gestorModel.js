import { PrismaClient } from "@prisma/client";
import z, { bigint, number } from "zod";

const prisma = new PrismaClient()

const gestorSchema = z.object({
    cpf_usuario: z.number({
        invalid_type_error: "O cpf deve ser um valor numérico",
        required_error: "O cpf deve ser obrigatório"
    }),

    departamento: z.string({
        invalid_type_error: "O departamento deve ser um valor tipo texto",
        required_error: "O departamento deve ser obrigatório"
    })
})

export async function gestorValidator(gestor, partial = null) {
    if(partial){
        return gestorSchema.partial(partial).safeParse(gestor)
    }

    return gestorSchema.safeParse(gestor)
}

export async function createGestor(gestor) {
    const data = {
        cpf_usuario: BigInt(gestor.cpf_usuario),
        departamento: gestor.departamento
    }

    const result = await prisma.Gestores.create({
        data: data,
        select: {
            id: true,
            cpf_usuario: true,
            departamento: true
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
    
}

export async function listGestor() {
    const result = await prisma.Gestores.findMany({
        select: {
            id: true,
            cpf_usuario: true,
            departamento: true
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function getGestor(cpf){
    const result = await prisma.Gestores.findUnique({
        where: {
            cpf_usuario: cpf
        },
        select: {
            id: true,
            cpf_usuario: true,
            departamento: true
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function deleteGestor(cpf) {
    const result = await prisma.Gestores.delete({
        where: {
            cpf_usuario: cpf
        },
        select: {
            id: true,
            cpf_usuario: true,
            departamento: true
        }
    })
    
    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function updateGestor(gestor, cpf) {

    const data = {
        cpf_usuario: gestor.cpf_usuario,
        departamento: gestor.departamento
    }

    const result = await prisma.Gestores.update({
        where: {
            cpf_usuario: cpf
        },
        data: data,
        select: {
            id: true,
            cpf_usuario: true,
            departamento: true
        }
    })
    
    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult

}