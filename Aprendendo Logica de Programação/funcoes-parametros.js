const btnSoma = document.querySelector("#somar")
const btnSubtracao = document.querySelector("#subtracao")
const btnMultiplicacao = document.querySelector("#multiplicar")
const btnDivisao = document.querySelector("#dividir")
const inputPrimeiroValor = document.querySelector ("#primeiroNumero")
const inputSegundoValor = document.querySelector ("#segundoNumero")
const divRes = document.querySelector(".res")

function somar(){
    let resultado = Number(inputPrimeiroValor.value) + Number ( inputSegundoValor.value)
    divRes.innerText = resultado

}

function subtracao(){
    let resultado = Number(inputPrimeiroValor.value) - Number (inputSegundoValor.value)
    divRes.innerText = resultado
}

function multiplicar(){
    let resultado = Number(inputPrimeiroValor.value) * Number (inputSegundoValor.value)
    divRes.innerText = resultado
}

function dividir(){
    let resultado = Number(inputPrimeiroValor.value) / Number (inputSegundoValor.value)
    divRes.innerText = resultado
}

btnSoma.addEventListener("click", somar)
btnSubtracao.addEventListener("click", subtracao)
btnMultiplicacao.addEventListener("click", multiplicar)
btnDivisao.addEventListener("click", dividir)

/*const btnSomar = document.querySelector("#soma")
const btnSubtracao = document.querySelector("#subtracao")
const btnDivisao = document.querySelector("#divisao")
const btnMultiplicacao = document.querySelector("#multiplicacao")


function soma(){
    let primeiroValor = Number(prompt("Digite um número"))
    let segundoValor = Number(prompt("Digite um número"))
    alert(primeiroValor + segundoValor)
}

btnSomar.addEventListener("click", soma)

function subtracao(){
    let primeiroValor = Number(prompt("Digite um número"))
    let segundoValor = Number(prompt("Digite um número"))
    alert(primeiroValor - segundoValor)
}

btnSubtracao.addEventListener("click", subtracao)

function divisao(){
    let primeiroValor = Number(prompt("Digite um número"))
    let segundoValor = Number(prompt("Digite um número"))
    alert(primeiroValor / segundoValor)
}

btnDivisao.addEventListener("click", divisao)

function multiplicacao(){
    let primeiroValor = Number(prompt("Digite um número"))
    let segundoValor = Number(prompt("Digite um número"))
    alert(primeiroValor * segundoValor)
}

btnMultiplicacao.addEventListener("click", multiplicacao)*/

