import { listAlunoCurso } from "../../Model/alunoCursoModel.js"

export default async function listAlunoCursoController(req, res) {
    try {
        const result = await listAlunoCurso()

        if(!result){
            return res.status(500).json({
                message: "Não foi possível listar AlunoCurso"
            })
        }

        return res.status(200).json({
            message: "AlunoCurso listado com sucesso!",
            alunocursos: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!!!",
            error: er.message,
            stack: er.stack
        })
    }
    
}