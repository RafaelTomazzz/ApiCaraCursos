import { Departamentos, PrismaClient } from "@prisma/client";
import z from "zod";

const prisma = new PrismaClient()

const alunoSchema = z.object({
    cpf_usuario: z.number({
        invalid_type_error: "O cpf deve ser um valor numérico",
        required_error: "O cpf deve ser obrigatório"
    }),

    cargo: z.string({
        invalid_type_error: "O cargo deve ser um valor tipo texto",
    })
    .max(20, "Cargo deve ter no máximo 20 caracteres")
    .min(5, "Cargo deve ter no mínimo 5 caracteres")
    .nullish(),

    departamento: z.string({
        invalid_type_error: "O departamento deve ser um valor numérico",
        required_error: "O cpf deve ser obrigatório"
    }),

    ultimo_acesso: z.date({
        invalid_type_error: "A data de acesso deve ser um valor tipo data",
    })
})

export async function alunoValidator(aluno, partial = null) {
    if(partial){
        return alunoSchema.partial(partial).safeParse(aluno)
    }

    return alunoSchema.safeParse(aluno)
}

export async function createAluno(aluno) {
    const data = {
        cpf_usuario: BigInt(aluno.cpf_usuario),
        cargo: aluno.cargo,
        departamento: aluno.departamento,
        ultimo_acesso: aluno.ultimo_acesso
    }
    
    const result = await prisma.Alunos.create({
        data: data,
        select: {
            id: true,
            cpf_usuario: true,
            cargo: true,
            departamento: true,
            ultimo_acesso: true
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function listAluno() {
    const result = await prisma.Alunos.findMany({
        select: {
            id: true,
            cpf_usuario: true,
            cargo: true,
            departamento: true,
            ultimo_acesso: true
        } 
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function getAluno(cpf) {
    const result = await prisma.Alunos.findUnique({
        where: {
            cpf_usuario: cpf
        },
                select: {
            id: true,
            cpf_usuario: true,
            cargo: true,
            departamento: true,
            ultimo_acesso: true
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult
}

export async function deleteAluno(cpf) {
    const result = await prisma.Alunos.delete({
        where: {
            cpf_usuario: cpf
        },
                select: {
            id: true,
            cpf_usuario: true,
            cargo: true,
            departamento: true,
            ultimo_acesso: true
        }
    })

    const safeResult = JSON.parse(
        JSON.stringify(result, (_, v) => (typeof v === 'bigint' ? v.toString() : v))
    )

    return safeResult   
}