const numero = Math.floor(Math.random() * 100) ;
let tentativas = 10;
function botao(){
    var valor = document.getElementById("valor").value
    console.log(valor)
    console.log(numero)
    tentativas = tentativas - 1
    document.getElementById("Numero").textContent = "Número que você colocou: " + valor
    if(valor == numero){
        document.getElementById("resultado").textContent = "Parabéns! Você acertou!"
    }else if(valor > numero){
        document.getElementById("resultado").textContent = "O número é menor do que o que você colocou."
    }
    else if(valor < numero){
        document.getElementById("resultado").textContent = "O número é maior do que o que você colocou."
    }

    document.getElementById("tentativas").textContent   = "Número de tentativas: " + tentativas
    if(tentativas == 0){
        document.getElementById("resultado").textContent = "Suas tentativas acabaram! O número era: " + numero
        document.getElementById("valor").disabled = true
        document.getElementById("butao").disabled = true
    }    
}