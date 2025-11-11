const botao = document.querySelector
("#botao")
const titulo = document.querySelector
("#titulo")

function trocaTexto(){
    titulo.innerText = "Biel"
   
}

botao.addEventListener("click", trocaTexto)
