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
        invalid_type_error: "O material deve ser um valor tipo texto",
        required_error: "O material deve ser obrigatório"
    })
    
})

export async function aulaValidator(aula, partial=null) {
    if(partial){
        return aulaSchema.partial(partial).safeParse(aluno)
    }

    return aulaSchema.safeParse(aluno)
}

