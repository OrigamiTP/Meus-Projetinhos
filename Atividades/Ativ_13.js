/*
Objetivo:Crie um objeto chamado "pessoa" com as seguintes propriedades: nome (string), idade (número), 
cidade (string) e estudante (booleano). Depois, exiba cada propriedade individualmente no console 
usando a notação de ponto. Em seguida, altere a cidade da pessoa para outro valor e exiba o objeto 
completo no console novamente.
*/
const Pessoa = {
    nome: "Anne",
    idade: 18,
    cidade: "Rio de janeiro",
    estudante: true
}
for (let value in Pessoa)
    console.log(value + ": " + Pessoa[value])
    console.log("\n")

Pessoa.cidade = "São Paulo"

for (let value in Pessoa)
    console.log(value + ": " + Pessoa[value])


