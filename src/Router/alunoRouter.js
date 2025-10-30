import e from "express";
import createAlunoController from "../Controller/Aluno/createAlunoController.js";
import listAlunoController from "../Controller/Aluno/listAlunoController.js";
import getAlunoController from "../Controller/Aluno/getAlunoController.js";
import deleteAlunoController from "../Controller/Aluno/deleteAlunoController.js"
import updateAlunoController from "../Controller/Aluno/updateAlunoController.js";

const router = e.Router()

router.post('/create', createAlunoController)
router.get('/list', listAlunoController)
router.get('/get/:cpf', getAlunoController)
router.delete('/delete/:cpf', deleteAlunoController)
router.put('/update/:cpf', updateAlunoController)

export default router