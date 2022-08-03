let botao1Atualizar = document.getElementById('atualizar-saldo')
let botao1Limpar = document.getElementById('limpar-saldo')
let somar = document.getElementById('soma') as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement 

campoSaldo.innerHTML = "0"


function somarAoSaldo(somar:number){

    let num = Number(campoSaldo?.innerHTML) 
    somar += num
    campoSaldo.innerHTML = somar.toString()
}

function limpaSaldo(){
    campoSaldo.innerHTML = ''
}

if(botao1Atualizar && botao1Limpar){
    botao1Atualizar.addEventListener('click', function(){
        somarAoSaldo(Number(somar.value))
    })

    botao1Limpar.addEventListener('click', function(){
        limpaSaldo()
    })
}