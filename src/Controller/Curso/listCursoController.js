import { listCurso } from "../../Model/cursoModel.js";

export default async function listCursoController(req, res) {
    try {
        const result = await listCurso()

        if(!result){
            return res.status(400).json({
                message: "Não foi possível listar os cursos",
            })
        }

        return res.status(200).json({
            message: "Cursos listados com sucesso",
            cursos: result
        })

    } catch (er) {
        return res.status(500).json({
            message: "Erro!!!",
            error: er.message,
            stack: er.stack
        })
    }
}