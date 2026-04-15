export class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
    }
    // constructor constrói um obj, ele foi feito para estar dentro duma casa.
    Cumprimentar(nome) {
            console.log(`Oi! Meu nome é ${this.nome}. Prazer em conhecer você ${nome}`)
        }
        //escrever assim ao invés de utilizar aspas duplas e o "+", por simples conveniência
}
//Classe não é um obj, ele é um molde para criar um obj -> classe == molde

/*let pessoa1 = {
    nome: "Artur",
    idade: 99,
    altura: 1.67,
    peso: "200 kg"
}*/
const pessoa1 = new Pessoa("Reo Mikage", 17, 1.72, 68)

console.log(pessoa1)

pessoa1.Cumprimentar("Reo Mikage")
pessoa1.Cumprimentar("Nagi Seishiro")


/*
Quais são as principais diferenças entre utilizar uma classe e um constructor para criar um obj?
Sendo q ambs criam um obj, só q de formas diferentes.

Resp:. A classe é um molde, não o obj.

O q é abstração?! e pq tem niveis?
*/