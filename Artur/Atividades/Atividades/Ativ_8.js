let a = 5
let b = 2

function Somar(num1, num2){
    let result = Number(num1) + Number(num2)
    ExibirResult(num1, num2, result, " + ")
}
function Subtrair(num1, num2){
    let result = Number(num1) - Number(num2)
    ExibirResult(num1, num2, result, " - ")
}
function Multiplicar(num1, num2){
    let result = Number(num1) * Number(num2)
    ExibirResult(num1, num2, result, " * ")
}
function Dividir(num1, num2){
    let result = Number(num1) / Number(num2)
    ExibirResult(num1, num2, result, " / ")
}
function ExibirResult(num1, num2, result, sinal) {
    console.log(num1 + sinal + num2 + " = " + result)
}
Somar(a, b)
Subtrair(a, b)
Multiplicar(a, b)
Dividir(a, b)