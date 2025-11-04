import e from "express";
import { uploadImage, uploadVideo } from "../Controller/cloudinaryController.js";

const router = e.Router()

router.post("/imagem", uploadImage)
router.post("/video", uploadVideo)

export default router