"use strict"

var botaoAtualizar = document.getElementById('atualizar-saldo')
var botaoLimpar = document.getElementById('limpar-saldo')
var soma = document.getElementById('soma')
var campoSaldo = document.getElementById('campo-saldo')
campoSaldo.innerHTML = "0"

function somarSaldo(soma){
    var num = Number(campoSaldo.innerHTML)
    soma += num
    campoSaldo.innerHTML = soma.toString()
}

function limparSaldo(){
    campoSaldo.innerHTML = ''
    soma.value = 0
}

if(botaoAtualizar && botaoLimpar){
    botaoAtualizar.addEventListener('click', function(){
        somarSaldo(Number(soma.value))
    })

    botaoLimpar.addEventListener('click', function(){
        limparSaldo()
    })
}