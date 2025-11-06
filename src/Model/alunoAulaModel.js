import { PrismaClient } from "@prisma/client"
import z from "zod"

const prisma = new PrismaClient()

const alunoAulaSchema = z.object({
    id_aluno: z.number({
        invalid_type_error: "O id_aluno deve ser um valor numérico",
        required_error: "O id_aluno deve ser obrigatório"
    }),

    id_aula: z.number({
        invalid_type_error: "O id_aula deve ser um valor numérico",
        required_error: "O id_aula deve ser obrigatório"
    })
})

export async function alunoAulaValidator(alunoAula, partial = null) {
    if(partial){
        return alunoAulaSchema.partial(partial).safeParse(alunoAula)
    }

    return alunoAulaSchema.safeParse(alunoAula)
}

export async function createAlunoAula(alunoAula) {
    const result = await prisma.Aluno_Aulas.create({
        data: alunoAula,
        select: {
            id_aluno: true,
            id_aula: true
        }
    })
    
    return result
}

export async function listAlunoAula() {
    const result = await prisma.Aluno_Aulas.findMany({
        select: {
            id_aluno: true,
            id_aula: true
        }
    })

    return result
}

export async function listByIdAlunoAula(id_aluno) {
    const result = await prisma.Aluno_Aulas.findMany({
        where: {
            id_aluno: id_aluno
        },
        select: {
            id_aluno: true,
            id_aula: true
        }
    })

    return result
}

export async function deleteAlunoAula(id_aluno, id_aula){
    const result = await prisma.Aluno_Aulas.delete({
        where: {
            id_aluno_id_aula: {
                id_aluno,
                id_aula
            }
        },
        select: {
            id_aluno: true,
            id_aula: true
        }
    })

    return result
}