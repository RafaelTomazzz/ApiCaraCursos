import { updateCurso, cursoValidator } from "../../Model/cursoModel.js";

export default async function updateCursoController(req, res) {
    const curso = req.body
    const { id } = req.params

    const { success, error, data } = await cursoValidator(curso, {id: true})

    if(!success){
        return res.status(400).json({
            message: "Não foi possível validar o curso",
            errors: error.flatten().fieldErrors
        })
    }

    const result = await updateCurso(+id, curso)

    if(!result){
        return res.status(200).json({
            message: "Não foi possível atualizar o curso"
        })
    }

    return res.status(200).json({
        message: "Curso atualizado com sucesso!",
        curso: result
    })
}