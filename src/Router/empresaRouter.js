import e from "express";
import createEmpresaController from "../Controller/Empresa/createEmpresaController.js";
import listEmpresaController from "../Controller/Empresa/listEmpresaController.js";
import getEmpresaController from "../Controller/Empresa/getEmpresaController.js";

const router = e.Router()

router.post("/create", createEmpresaController)
router.get("/list", listEmpresaController)
router.get("/get/:cnpj", getEmpresaController)

export default router

