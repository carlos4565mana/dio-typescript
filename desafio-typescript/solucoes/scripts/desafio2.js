"use strict"

console.log("desafio2")

var Profissao

(function (Profissao){
    Profissao["atriz"] = "atriz"
    Profissao["padeiro"] = "padeiro"
    Profissao["professor"] = "professor"
})(Profissao || (Profissao = {}))


var pessoa1 = {
    nome: "Maria",
    idade: 40,
    profissao: Profissao.atriz
}

var pessoa2 = {
    nome: "João",
    idade: 50,
    profissao: Profissao.professor
}

var pessoa3 = {
    nome: "Marcos",
    idade: 30,
    Profissao: Profissao.padeiro
}
var pessoa4 = {
    nome: "Janaina",
    idade: 29,
    profissao: Profissao.atriz
}

console.log(pessoa1, pessoa2, pessoa3, pessoa4)