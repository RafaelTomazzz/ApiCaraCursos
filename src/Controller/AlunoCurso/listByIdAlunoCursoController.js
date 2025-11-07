import { listByIdAlunoCurso, alunoCursoValidator } from "../../Model/alunoCursoModel.js";

export default async function listByIdAlunoCursoController(req, res) {
    try {
        const { id } = req.params
        const alunoCurso = { id_aluno: +id }

        const { success, data, error } = await alunoCursoValidator(alunoCurso, {id_curso: true})

        if (!success) {
            return res.status(400).json({
                message: "Não foi possível validar a AlunoAula",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await listByIdAlunoCurso(+id)

        if(!result){
            return res.status(500).json({
                message: "Não foi possível deletar AlunoCurso"
            })
        }

        return res.status(200).json({
            message: "AlunoCurso deletado com sucesso!",
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