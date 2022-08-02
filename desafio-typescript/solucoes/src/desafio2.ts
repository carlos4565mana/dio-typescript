console.log("desafio2")

enum Profissao1 {
    atriz = "atriz",
    padeiro = "padeiro"
}

interface Pessoa {
    nome:string,
    idade: number,
    profissao: Profissao1
}

const pessoa5: Pessoa = {
    nome: "Maria",
    idade: 39,
    profissao: Profissao1.atriz

}

const pessoa6: Pessoa = {
    nome: "Paulo",
    idade: 28,
    profissao: Profissao1.padeiro
}

console.log(pessoa5, pessoa6)