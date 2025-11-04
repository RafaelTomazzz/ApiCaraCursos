import express from "express"
import cors from 'cors'
import empresaRouter from "./Router/empresaRouter.js"
import usuarioRouter from "./Router/usuarioRouter.js"
import gestorRouter from "./Router/gestorRouter.js"
import alunoRouter from "./Router/alunoRouter.js"
import cloudinaryRouter from "./Router/cloudinaryRouter.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({
        message: "Funcionou"
    })
})

app.listen(3000, () => {
    console.log('Servirdor Rodando no http://localhost:3000')
})

app.use("/empresa", empresaRouter)
app.use("/usuario", usuarioRouter)
app.use("/gestor", gestorRouter)
app.use("/aluno", alunoRouter)
app.use("/upload", cloudinaryRouter)