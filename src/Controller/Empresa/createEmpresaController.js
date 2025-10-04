import { createEmpresa, empresaValidator } from "../../Model/empresaModel.js";

export default async function(req, res){
    const empresa = req.body
    const { success, error, data } = empresaValidator(empresa);

    if(!success){
        return res.status(400).json({
            message: "Não foi possível validar a empresa",
            errors: error.flatten().fieldErrors
        })
    }

    const result = await createEmpresa(empresa)

    if(!result){
        return res.status(500).json({
            message:"Não foi possível criar empresa"
        })
    }

    return res.status(200).json({
        message: "Empresa criada com sucesso",
        result
    })
}
