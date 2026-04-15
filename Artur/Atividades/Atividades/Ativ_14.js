/*
Crie um objeto chamado "calculadora" que possua as propriedades: "marca" (uma string com o nome 
da calculadora), "historico" (um array vazio) e um método chamado "somar" que receba dois números, 
adicione o resultado ao array "historico" e o retorne. Chame o método "somar" três vezes e depois 
exiba o histórico completo de operações.
*/
let calcky = {
    marca: "Nike",
    histórico: [],
    somar(a , b){
        let soma = a + b
        let result = a + " + " + b + " = " + soma
        console.log(result)
        this.histórico.push(result)
        return this.result
    }

}

calcky.somar(1, 2)
console.log("O histórico é " + result)