import e from "express";
import createGestorController from "../Controller/Gestor/createGestorController.js"
import listGestorController from "../Controller/Gestor/listGestorController.js"
import getGestorController from "../Controller/Gestor/getGestorController.js"
import deleteGestorController from "../Controller/Gestor/deleteGestorController.js"
import updateGestorController from "../Controller/Gestor/updateGestorController.js"

const router = e.Router()

router.post("/create", createGestorController)
router.get("/list", listGestorController)
router.get("/get/:cpf", getGestorController)
router.delete("/delete/:cpf", deleteGestorController)
router.put("/update/:cpf", updateGestorController)

export default router