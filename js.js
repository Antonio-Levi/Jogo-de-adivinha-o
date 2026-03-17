const numero = Math.floor(Math.random() * 10) ;

function botao(){
    var valor = document.getElementById("valor").value
    console.log(valor)
    console.log(numero)
    document.getElementById("Numero").textContent = "Número que você colocou: " + valor
    if(valor == numero){
        document.getElementById("resultado").textContent = "Parabéns! Você acertou!"
    }else if(valor > numero){
        document.getElementById("resultado").textContent = "O número é menor do que o que você colocou."
    }
    else if(valor < numero){
        document.getElementById("resultado").textContent = "O número é maior do que o que você colocou."
    }
}