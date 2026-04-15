/*Arrays

let nomes = ["artur","Marcelo","gabsduascorrentes","impressora defeituosa"]

let nomes2 = ["Gaspar","Daniel","Shinokeshin","Matheus"]


//console.log(nomes.at(2))

//concat - junta os arrays
//console.log(nomes.concat(nomes2))

//join - organiza numa string os valores do array
//console.log(nomes.join(", "))


//console.log(nomes2.length)

//console.log(nomes.pop())

//nomes2.push("GuiTwoFlow","Doritos")

//console.log(nomes2)

//console.log(nomes2.splice(1, 2))*/

/*estrutura de repetição

//WHILE:
let nomes = ["Artur","Marcelo","gabsduascorrentes","impressora defeituosa"]
let i = 0
while(i <= 3) {
    console.log(nomes[i])
    i++
}

for (let i = 0; i < nomes.length; i++) {
    
    console.log(nomes[i])
}*/
/*OBJETOS*/

/*const user = {
    id: 1,
    nome: "Shaula",
    endereço: "escorpião",
    func: function () {console.log(`this.nome`, `this.endereço`)}
    
}*/
/*Funções*/
/*function cumprimentar(nome){
    console.log("bom dia " + nome)
}

const calc = (num1,num2) => {}

cumprimentar("gabsduascorrentes")
cumprimentar("shinokeshin")

let lista = [18,"Guloku",101.101,"Reo",true,false]
const filtrarNumeros = (v) => {return typeof v === 'number'}

console.log(filtrarNumeros)

console.log(lista)
let newLista = lista.filter(filtrarNumeros)
console.log(newLista)*/

/*let lista = ["Artur" , "Reo", "Impressora Defeituosa", "Anne", "Horigam", "Origami", "Guloku"]

let novosNomes = lista.map(
    (value) => {
        return value + " But"
    }
)

console.log(novosNomes)

let nomesFiltrados = lista.map(
    (value) => {
        return value.length
    }
)

console.log(nomesFiltrados)*/

//#region /*EXERCICIO 14*/
let historick = []


let Calculadera = {
    marca: "Nike"
}

function calc() {
    document.getElementById("result").innerText = ""
    let num1 = document.getElementById("Num1").value
    let num2 = document.getElementById("Num2").value
    let result = Number(num1) + Number(num2)
    document.getElementById("result").innerHTML += "<li>" + result + "<li>"
}

function historico() {
    let hist = document.getElementById("result").value
    historick.push(hist)
}
// #endregion

