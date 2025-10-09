import e from "express";
import createEmpresaController from "../Controller/Empresa/createEmpresaController.js";
import listEmpresaController from "../Controller/Empresa/listEmpresaController.js";
import getEmpresaController from "../Controller/Empresa/getEmpresaController.js";
import deleteEmpresaController from "../Controller/Empresa/deleteEmpresaController.js";
import updateEmpresaController from "../Controller/Empresa/updateEmpresaController.js";

const router = e.Router()

router.post("/create", createEmpresaController)
router.get("/list", listEmpresaController)
router.get("/get/:cnpj", getEmpresaController)
router.delete("/delete/:cnpj", deleteEmpresaController)
router.put("/update/:cnpj", updateEmpresaController)

export default router

