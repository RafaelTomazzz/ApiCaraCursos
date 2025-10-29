import e from "express";
import createAlunoController from "../Controller/Aluno/createAlunoController.js";
import listAlunoController from "../Controller/Aluno/listAlunoController.js";
import getAlunoController from "../Controller/Aluno/getAlunoController.js";

const router = e.Router()

router.post('/create', createAlunoController)
router.get('/list', listAlunoController)
router.get('/get/:cpf', getAlunoController)

export default router