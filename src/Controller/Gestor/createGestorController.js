import { createGestor, gestorValidator } from "../../Model/gestorModel.js";
import z from "zod";

export default async function createGestorController(req, res){
    try {
        const gestor = req.body
        const { success, data, error } = await gestorValidator(gestor)
        
        if(!success){
            return res.status(400).json({
            message: "Não foi possível validar a empresa",
            errors: error.flatten().fieldErrors
        })
        }

        const result = await createGestor(gestor)

        if(!result){
            return res.status(500).json({
            message:"Não foi possível criar empresa"})
        }

        return res.status(200).json({
            message: "Gestor criado com sucesso!",
            gestor: result
        })
    } catch (er) {
        return res.status(500).json({
            message: "Erro!",
            error: er.message
        })
    }
} 