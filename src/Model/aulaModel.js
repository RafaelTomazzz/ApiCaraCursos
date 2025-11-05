import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const aulaSchema = z.object({
    titulo: z.string({
        invalid_type_error: "O título deve ser um valor tipo texto",
        required_error: "O título deve ser obrigatório"
    }),

    video: z.string({
        invalid_type_error: "O vídeo deve ser um valor tipo texto",
        required_error: "O vídeo deve ser obrigatório"
    }),

    imagem: z.string({
        invalid_type_error: "A imagem deve ser um valor tipo texto",
        required_error: "A imagem deve ser obrigatório"
    }),

    duracao: z.number({
        invalid_type_error: "A duração deve ser um valor numérico",
        required_error: "A duração deve ser obrigatório"
    }),

    material: z.string({
        invalid_type_error: "O material deve ser um valor tipo texto"
    })
    .nullish()
    
})

export async function aulaValidator(aula, partial = null) {
    if(partial){
        return aulaSchema.partial(partial).safeParse(aula)
    }

    return aulaSchema.safeParse(aula)
}

export async function createAula(aula) {
    const result = await prisma.Aulas.create({
        data: aula,
        select: {
            id: true,
            titulo: true,
            video: true,
            imagem: true,
            duracao: true,
            material: true
        }
    })

    return result
}

export async function listAula() {
    const result = await prisma.Aulas.findMany({
        select: {
            id: true,
            titulo: true,
            video: true,
            imagem: true,
            duracao: true,
            material: true
        }
    })
    
    return result
}

export async function getAula(id) {
    const result = await prisma.Aulas.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            titulo: true,
            video: true,
            imagem: true,
            duracao: true,
            material: true
        }
    })
    
    return result
}

export async function deleteAula(id) {
    const result = await prisma.Aulas.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            titulo: true,
            video: true,
            imagem: true,
            duracao: true,
            material: true
        }
    })
}

export async function updateAula(id, aula) {
    const result = await prisma.Aulas.update({
        where: {
            id: id
        },
        data: aula,
        select: {
            id: true, 
            titulo: true,
            video: true,
            imagem: true,
            duracao: true,
            material: true
        }
    })
    
    return result
}

