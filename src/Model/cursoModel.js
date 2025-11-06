import { PrismaClient } from "@prisma/client"
import z from "zod"

const prisma = new PrismaClient()

const cursoSchema = z.object({
    id: z.number({
        invalid_type_error: "O id deve ser um valor numérico",
        required_error: "O id deve ser obrigatório"
    }),

    carga_horaria: z.number({
        invalid_type_error: "A carga horária deve ser um valor numérico",
        required_error: "A carga horária deve ser obrigatório"
    }),

    nome: z.string({
        invalid_type_error: "O nome deve ser um tipo texto",
        required_error: "O nome deve ser obrigatório"
    })
    .max(30, "O campo Nome deve ter no máximo 30 caracteres"),

    descricao: z.string({
        invalid_type_error: "A descrição deve ser um valor tipo texto",
        required_error: "A descrição deve ser obrigatório"
    })
    .max(250, "O campo descrição deve ter no máximo 250 caracteres")
})

export async function cursoValidator(curso, partial = null) {
    if(partial){
        return cursoSchema.partial(partial).safeParse(curso)
    }

    return cursoSchema.safeParse(curso)
}

export async function createCurso(curso) {
    const result = await prisma.Cursos.create({
        data: curso,
        select: {
            id: true,
            carga_horaria: true,
            nome: true,
            descricao: true
        }
    })

    return result
}

export async function listCurso() {
    const result = await prisma.Cursos.findMany({
        select: {
            id: true,
            carga_horaria: true,
            nome: true,
            descricao: true
        }
    })

    return result
}

export async function getCurso(id) {
    const result = await prisma.Cursos.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            carga_horaria: true,
            nome: true,
            descricao: true
        }
    })

    return result
}

export async function deleteCurso(id) {
    const result = await prisma.Cursos.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            carga_horaria: true,
            nome: true,
            descricao: true
        }
    })

    return result
}

export async function updateCurso(id, curso) {
    const result = await prisma.Cursos.update({
        where: {
            id: id
        },
        data: curso,
        select: {
            id: true,
            carga_horaria: true,
            nome: true,
            descricao: true
        }
    })

    return result
}