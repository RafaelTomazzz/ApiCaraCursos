import e from "express";
import createAlunoAulaController from "../Controller/AlunoAula/createAlunoAulaController.js";
import listAlunoAulaController from "../Controller/AlunoAula/listAlunoAulaController.js";
import deleteAlunoAulaController from "../Controller/AlunoAula/deleteAlunoAulaController.js"
import listByIdAlunoAulaController from "../Controller/AlunoAula/listByIdAlunoAulaController.js";

const router = e.Router()

router.post("/create", createAlunoAulaController)
router.get("/list", listAlunoAulaController)
router.delete("/delete", deleteAlunoAulaController)
router.get("/getbyid/:id_aluno", listByIdAlunoAulaController)

export default router