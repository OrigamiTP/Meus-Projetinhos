/*Calculadora Virtual*/
let historick = []

function somar(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = Number(num1) + Number(num2)
    ExibirResult(num1, num2, result, '+')
}
function sub(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = Number(num1) - Number(num2)
    ExibirResult(num1, num2, result, '-')
}
function multi(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = Number(num1) * Number(num2)
    ExibirResult(num1, num2, result, '*')
}
function div(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = Number(num1) / Number(num2)
    ExibirResult(num1, num2, result, '/')
}

function histórico(resultado){
    historick.push(resultado)
    document.getElementById("result").innerHTML = ""
    for(let i = 0; i < historick.length; i++){
        document.getElementById("result").innerHTML += historick[i]
    }
    
}

function ExibirResult(num1, num2, result, sinal) {
    let resultado = document.getElementById("result").innerHTML += "<li>" + num1 + " " + sinal + " " + num2 + " = " + result + "</li>"
    histórico(resultado)
}