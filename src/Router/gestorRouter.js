import e from "express";
import createGestorController from "../Controller/Gestor/createGestorController.js";

const router = e.Router()

router.post("/create", createGestorController)

export default router