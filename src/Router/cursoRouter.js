import e from "express";
import createCursoController from "../Controller/Curso/createCursoController.js";
import listCursoController from "../Controller/Curso/listCursoController.js";
import getCursoController from "../Controller/Curso/getCursoController.js";
import deleteCursoController from "../Controller/Curso/deleteCursoController.js";
import updateCursoController from "../Controller/Curso/updateCursoController.js";

const router = e.Router()

router.post("/create", createCursoController)
router.get("/list", listCursoController)
router.get("/get/:id", getCursoController)
router.delete("/delete/:id", deleteCursoController)
router.put("/update/:id", updateCursoController)

export default router