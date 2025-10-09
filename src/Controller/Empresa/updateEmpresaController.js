import { updateEmpresa, empresaValidator } from "../../Model/empresaModel.js";

export default async function updateEmpresaController(req, res) {
    try{
        const cnpj = req.params.cnpj
        const empresa = req.body

        const {success, error} = empresaValidator(empresa)

        if(!success){
            return res.status(400).json({
                message: "Erro ao validar o cnpj!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await updateEmpresa(cnpj, empresa)

        if(!result){
            return res.status(500).json({
                message: "Não foi possível alterar a empresa"
            })
        }

        return res.status(200).json({
            messsage: "Empresa alterada com sucesso!",
            empresa: result
        })
    } catch(error){
        return res.status(500).json({
            message: "Não foi possível alterar a empresa"
        })
    }
    
    
}