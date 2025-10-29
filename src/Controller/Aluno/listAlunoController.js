import { listAluno } from "../../Model/alunoModel.js";

export default async function listAlunoController(req, res) {
    try {
        const result = await listAluno()

        if(!result){
            return res.status(500).json({
                message: "Não foi possível listar os alunos",
            })
        }

        return res.status(200).json({
            message: "Alunos listados com sucesso!",
            alunos: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })
    }
}