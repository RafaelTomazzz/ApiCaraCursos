import { getAllEmpresa } from "../../Model/empresaModel.js";

export default async function(req, res) {
    const result = await getAllEmpresa()
    
    if(!result){
        return res.status(500).json({
            message: "Não foi possível listar as empresas"
        })
    }

    return res.status(200).json(result)
}