import e from "express";
import createAulaController from "../Controller/Aula/createAulaController.js";
import listAulaController from "../Controller/Aula/listAulaController.js";
import getAulaController from "../Controller/Aula/getAulaController.js";
import deleteAulaController from "../Controller/Aula/deleteAulaController.js";
import updateAulaController from "../Controller/Aula/updateAulaController.js";

const router = e.Router()

router.post("/create", createAulaController)
router.get("/list", listAulaController),
router.get("/get/:id", getAulaController)
router.delete("/delete/:id", deleteAulaController)
router.put("/update/:id", updateAulaController)

export default router