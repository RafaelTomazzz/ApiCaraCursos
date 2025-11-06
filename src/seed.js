import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const dataEmpresa1 = {
        cnpj: "18934333000153",
        nome: "EmpresaA",
        email: "email@email.com",
        telefone: "11-999999999"
    }

    const dataEmpresa2 = {
        cnpj: "90938166000146",
        nome: "EmpresaB",
        email: "email@email.com",
        telefone: "11-999999999"
    }

    await prisma.Empresas.create({
        data: dataEmpresa1
    })

    await prisma.Empresas.create({
        data: dataEmpresa2
    })


    const dataUsuario1 = {
        cpf: 72717509089,
        cnpj_empresa: "18934333000153",
        nome: "Rafael",
        sobrenome: "Tomaz",
        senha: "123456",
    }

    const dataUsuario2 = {
        cpf: 84724636050,
        cnpj_empresa: "18934333000153",
        nome: "Iris Thaina",
        sobrenome: "de Araujo",
        senha: "123456",
    }

    const dataUsuario3 = {
        cpf: 34765490033,
        cnpj_empresa: "18934333000153",
        nome: "Victor Hugo",
        sobrenome: "Ricoldi",
        senha: "123456",
    }

    await prisma.Usuarios.create({
        data: dataUsuario1
    })

    await prisma.Usuarios.create({
        data: dataUsuario2
    })

    await prisma.Usuarios.create({
        data: dataUsuario3
    })


    const dataGestor = {
        cpf_usuario: 72717509089,
        departamento: "Diretoria" 
    }

    await prisma.Gestores.create({
        data: dataGestor
    })


    const dataAluno1 = {
        cpf_usuario: 84724636050,
        cargo: "Estagiário",
        departamento: "Contabilidade"
    }

    const dataAluno2 = {
        cpf_usuario: 34765490033,
        cargo: "Estagiário",
        departamento: "Comercial"
    }

    await prisma.Alunos.create({
        data: dataAluno1
    })

    await prisma.Alunos.create({
        data: dataAluno2
    })

    const dataAula1 = {
        titulo: "Excel para iniciantes - Aula 1",
        video: "https://res.cloudinary.com/dp2lks0dw/video/upload/v1762300086/videoAula/spky43vmcs5z0fua8dtk.mp4",
        imagem: "https://res.cloudinary.com/dp2lks0dw/image/upload/v1762296951/imagemAula/sos9gfvi7letekiqtasv.jpg",
        duracao: 8
    }

    const dataAula2 = {
        titulo: "Excel para iniciantes - Aula 2",
        video: "https://res.cloudinary.com/dp2lks0dw/video/upload/v1762300086/videoAula/spky43vmcs5z0fua8dtk.mp4",
        imagem: "https://res.cloudinary.com/dp2lks0dw/image/upload/v1762296951/imagemAula/sos9gfvi7letekiqtasv.jpg",
        duracao: 8
    }

    await prisma.Aulas.create({
        data: dataAula1
    })

    await prisma.Aulas.create({
        data: dataAula2
    })

    const dataCurso1 = {
        carga_horaria: 6,
        nome: "Excel para iniciantes",
        descricao: "Curso introdutorio ao excel, tem como objetivo mostrar seus princípios básico, de duração de 6 horas" 
    }

    const dataCurso2 = {
        carga_horaria: 8,
        nome: "Word para iniciantes",
        descricao: "Curso introdutorio ao word, tem como objetivo mostrar seus princípios básico, de duração de 8 horas" 
    }

    await prisma.cursos.create({
        data: dataCurso1
    })

    await prisma.cursos.create({
        data: dataCurso2
    })
}

main()