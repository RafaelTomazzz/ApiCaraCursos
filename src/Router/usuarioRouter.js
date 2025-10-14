import e from "express";
import createUsuarioController from "../Controller/Usuarios/createUsuarioController.js";

const router = e.Router();

router.post("/create", createUsuarioController)
router.get('/teste', (req, res) => {
    return res.json({
        message: "Funcionou"
    })
})

export default router;