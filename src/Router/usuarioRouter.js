import e from "express";
import createUsuarioController from "../Controller/Usuarios/createUsuarioController.js";
import listUsuarioController from "../Controller/Usuarios/listUsuarioController.js";
import getUsuarioController from "../Controller/Usuarios/getUsuarioController.js";
import deleteUsuarioController from "../Controller/Usuarios/deleteUsuarioController.js";
import updateUsuarioController from "../Controller/Usuarios/updateUsuatioController.js";

const router = e.Router();

router.post("/create", createUsuarioController)
router.get("/list", listUsuarioController)
router.get("/get/:cpf", getUsuarioController)
router.delete("/delete/:cpf", deleteUsuarioController)
router.put("/update/:cpf", updateUsuarioController)

export default router;