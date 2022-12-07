// // enquanto a condição for verdadeira faça algo 
// let contador = 0 
// while (contador <= 10){
//     console.log(contador)
//     contador = contador + 1
// }

// console.log("terminou")

function tabuada(){
let cont = 0
let n1 = document.getElementById("numero").value
document.getElementById("resultado").innerHTML = ""
// o item a cima é utilizado para limpar a tela do resultado anterior
while (cont <= 10){
    document.getElementById("resultado").innerHTML += (n1 + " X " + cont + " = " + cont * n1 + "<br>")
    cont++
    // o + após o "innerHTML" faz com que os itens dentro do laço continuem na tela, no caso não substituindo o item anterior
}

}