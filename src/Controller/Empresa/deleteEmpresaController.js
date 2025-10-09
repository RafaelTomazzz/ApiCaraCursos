import { deleteEmpresa, empresaValidator } from "../../Model/empresaModel.js";

export default async function deleteEmpresaController(req, res){
    const cnpj = req.params.cnpj
    const empresa = {cnpj: cnpj}

    const {success, error} = empresaValidator(empresa, {nome: true, email: true, telefone: true})

    if(!success){
        return res.status(400).json({
            message: "Erro ao validar o cnpj!",
            errors: error.flatten().fieldErrors
        })
    }

    const result = deleteEmpresa(cnpj)

    if(!result){
        return res.status(500).json({
            message: "Erro ao deletar empresa"
        })
    }

    return res.status(200).json({
        message: "Empresa deletada com sucesso!",
        empresa: result
    })
}