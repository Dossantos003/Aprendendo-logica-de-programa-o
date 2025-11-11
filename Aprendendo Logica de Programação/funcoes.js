const botao = document.querySelector ("#btn")

function chamaFuncao() {
    alert("olá")
    segundaFuncao()}
   
function segundaFuncao(){
    alert("Segunda função chamada")
     terceiraFuncao()
}
function terceiraFuncao(){
    alert("Terceira função chamada")
    quartaFuncao()
}
function quartaFuncao(){
    alert("Quarta função chamada")
    quintaFuncao()
}
function quintaFuncao(){
    alert("Quinta função chamada")
}

botao.addEventListener("click",chamaFuncao)

