import { createCurso, cursoValidator } from "../../Model/cursoModel.js";

export default async function createCursoController(req, res) {
    try {
        const curso = req.body
        const { success, error, data } = await cursoValidator(curso, {id: true})

        if(!success){
            return res.status(400).json({
                message: "Não foi possível validar o curso",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await createCurso(curso)

        if(!result){
            return res.status(500).json({
                message: "Não foi possível criar curso"
            })
        }

        return res.status(200).json({
            message: "Curso creado com sucesso!",
            curso: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!!!",
            error: er.message,
            stack: er.stack
        })
    }
}