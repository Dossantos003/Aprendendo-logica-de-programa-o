let filmes = ["Super-Homem", "Homem Aranha", "Carros", "Impuros"]

filmes[1] = "Harry Potter"//altera o valor no indice 2

filmes.push("Homem Aranha 6")// adicona no final
filmes.unshift("Homem Aranha 0")// adiciona no começo
filmes.pop()// remove o ultimo no arrays
filmes.shift()// remove o primeiro arrays
console.log(filmes)
/* console.log(filmes[0]) 
 console.log(filmes[1]) 
 console.log(filmes[2]) 
 console.log(filmes[3]) 
 console.log(filmes[4])*/
for (const filme of filmes) {
    console.log(filme)
}