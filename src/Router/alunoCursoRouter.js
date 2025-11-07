import e from "express"
import createAlunoCursoController from "../Controller/AlunoCurso/createAlunoCursoController.js"
import listAlunoCursoController from "../Controller/AlunoCurso/listAlunoCursoController.js"
import deleteAlunoCursoController from "../Controller/AlunoCurso/deleteAlunoCursoController.js"
import listByIdAlunoCursoController from "../Controller/AlunoCurso/listByIdAlunoCursoController.js"

const router = e.Router()

router.post("/create", createAlunoCursoController)
router.get("/list", listAlunoCursoController)
router.get("/listbyid/:id", listByIdAlunoCursoController)
router.delete("/delete", deleteAlunoCursoController)

export default router