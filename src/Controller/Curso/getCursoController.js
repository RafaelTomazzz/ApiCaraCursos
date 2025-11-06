import { getCurso, cursoValidator } from "../../Model/cursoModel.js";

export default async function getCursoController(req, res) {
    try {
        const { id } = req.params
        const curso = { id: +id}
        const { success, error, data } = await cursoValidator(curso, {carga_horaria: true, nome: true, descricao: true})

        if(!success){
            return res.status(400).json({
                message: "Não foi possível validar o curso",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await getCurso(+id)

        if(!result){
            return res.status(500).json({
                message: "Não foi possível achar o curso"
            })
        }

        return res.status(200).json({
            message: "Curso encontrado com sucesso!",
            curso: result
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Erro!!!",
            error: er.message,
            stack: er.stack
        })
    }
}