import { createAlunoCurso, alunoCursoValidator } from "../../Model/alunoCursoModel.js";

export default async function createAlunoCursoController(req, res) {
    try {
        const alunoCurso = req.body
        const { success, data, error } = await alunoCursoValidator(alunoCurso)

        if(!success){
            return res.status(400).json({
                message: "Não foi possível validar a AlunoCurso",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await createAlunoCurso(alunoCurso)

        if(!result){
            return res.status(500).json({
                message: "Erro ao criar AlunoCurso"
            })
        }

        return res.status(200).json({
            message: "AlunoCurso criado com sucesso",
            alunocurso: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!!!",
            error: er.message,
            stack: er.stack
        })
    }    
}