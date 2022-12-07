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
while (cont <= 10){
    document.getElementById("resultado").innerHTML += (n1 + " X " + cont + " = " + cont * n1 + "<br>")
    cont++
    
}

}