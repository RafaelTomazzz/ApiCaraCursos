import { empresaValidator, getByIdEmpresa } from "../../Model/empresaModel.js"

export default async function getEmpresaController(req, res) {
    const cnpj = req.params.id

    const empresa = {cnpj: +cnpj}
    /*const { success, error, data} = empresaValidator(empresa, {nome: true, empresa: true, telefone: true})

    if(!success){
        return res.status(400).json({
            message: "Erro ao validar o cnpj!",
            errors: error.flatten().fieldErrors
        })
    }*/

    const result = getByIdEmpresa(+cnpj)
    
    if(!result){
        return res.status(500).json({
            message: "Erro ao buscar empresa!"
        })
    }

    return res.status(200).json({
        empresa: result
    })
    
}