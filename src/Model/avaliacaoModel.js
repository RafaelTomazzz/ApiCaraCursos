import { PrismaClient } from "@prisma/client";
import z from "zod";

const prisma = new PrismaClient()

const avaliacaoSchema = z.object({
    id: z.number({
        invalid_type_error: "O id deve ser um valor numérico",
        required_error: "O id deve ser obrigatório"
    }),

    id_curso: z.number({
        invalid_type_error: "O id_curso deve ser um valor numérico",
        required_error: "O id_curso deve ser obrigatório"
    }),

    titulo: z.string({
        invalid_type_error: "O titulo deve ser um valor tipo texto",
        required_error: "O título deve ser obrigatório"
    })
    .max(30, "Título deve ter no máximo 30 caracteres"),

    duracao: z.number({
        invalid_type_error: "O titulo deve ser um valor tipo texto",
        required_error: "O título deve ser obrigatório"
    }),

    data_limite: z.date({
        invalid_type_error: "O titulo deve ser um valor tipo data"
    })
    .nullable(),

    tipo: z.string({
        invalid_type_error: "O tipo deve ser um valor tipo texto",
        required_error: "O tipo deve ser obrigatório"
    })
    .max(30, "Tipo deve ter no máximo 30 caracteres",),

    nota_max: z.number({
        invalid_type_error: "A nota deve ser um valor numérico",
        required_error: "A nota deve ser obrigatório"
    })

})