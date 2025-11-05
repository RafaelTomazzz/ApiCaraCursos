import e from "express";
import createAulaController from "../Controller/Aula/createAulaController.js";

const router = e.Router()

router.post("/create", createAulaController)

export default router