import e from "express";
import createAulaController from "../Controller/Aula/createAulaController.js";
import listAulaController from "../Controller/Aula/listAulaController.js";
import getAulaController from "../Controller/Aula/getAulaController.js";

const router = e.Router()

router.post("/create", createAulaController)
router.get("/list", listAulaController),
router.get("/get/:id", getAulaController)

export default router