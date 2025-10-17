import e from "express";
import createUsuarioController from "../Controller/Usuarios/createUsuarioController.js";
import listUsuarioController from "../Controller/Usuarios/listUsuarioController.js";
import getUsuarioController from "../Controller/Usuarios/getUsuarioController.js";

const router = e.Router();

router.post("/create", createUsuarioController)
router.get("/list", listUsuarioController)
router.get("/get/:cpf", getUsuarioController)

export default router;