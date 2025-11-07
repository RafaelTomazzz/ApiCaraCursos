import { deleteAlunoCurso, alunoCursoValidator } from "../../Model/alunoCursoModel.js";

export default async function deleteAlunoCursoController(req, res) {
    try {
        const alunoCurso = req.body

        const { success, data, error } = await alunoCursoValidator(alunoCurso)

        if (!success) {
            return res.status(400).json({
                message: "Não foi possível validar a AlunoAula",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await deleteAlunoCurso(alunoCurso.id_aluno, alunoCurso.id_curso)

        if(!result){
            return res.status(500).json({
                message: "Não foi possível listar AlunoCurso"
            })
        }

        return res.status(200).json({
            message: "AlunoCurso listados com sucesso!",
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