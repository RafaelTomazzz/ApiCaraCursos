import { PrismaClient } from "@prisma/client"
import z from "zod"

const prisma = new PrismaClient()

const alunoCursoSchema = z.object({
    id_aluno: z.number({
        invalid_type_error: "O id_aluno deve ser um valor numérico",
        required_error: "O id_aluno deve ser obrigatório"
    }),

    id_curso: z.number({
        invalid_type_error: "O id_curso deve ser um valor numérico",
        required_error: "O id_curso deve ser obrigatório"
    })
})

export async function alunoCursoValidator(alunoCurso, partial = null) {
    if(partial){
        return alunoCursoSchema.partial(partial).safeParse(alunoCurso)
    }

    return alunoCursoSchema.safeParse(alunoCurso)
}

export async function createAlunoCurso(alunoCurso) {
    const data = {
        id_aluno: alunoCurso.id_aluno,
        id_curso: alunoCurso.id_curso,
        data_inicio: new Date(),
        data_fim: alunoCurso.data_fim
    }
    
    const result = await prisma.Aluno_Cursos.create({
        data: data,
        select:{
            id_aluno: true,
            id_curso: true,
            data_inicio: true,
            data_fim: true
        }
    })

    return result
}

export async function listAlunoCurso() {
    const result = await prisma.Aluno_Cursos.findMany({
        select:{
            id_aluno: true,
            id_curso: true,
            data_inicio: true,
            data_fim: true
        }
    })

    return result
}

export async function listByIdAlunoCurso(id_aluno) {
    const result = await prisma.Aluno_Cursos.findMany({
        where: {
            id_aluno: id_aluno
        },
        select:{
            id_aluno: true,
            id_curso: true,
            data_inicio: true,
            data_fim: true
        }
    })

    return result
}

export async function deleteAlunoCurso(id_aluno, id_curso) {
    const result = await prisma.Aluno_Cursos.delete({
        where: {
            id_aluno_id_curso: {
                id_aluno,
                id_curso
            }
        },
        select:{
            id_aluno: true,
            id_curso: true,
            data_inicio: true,
            data_fim: true
        }
    })

    return result
}