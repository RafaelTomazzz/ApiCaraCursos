import e from "express";
import createEmpresaController from "../Controller/Empresa/createEmpresaController.js";
import listEmpresaController from "../Controller/Empresa/listEmpresaController.js";

const router = e.Router()

router.post("/create", createEmpresaController)
router.get("/list", listEmpresaController)

export default router

