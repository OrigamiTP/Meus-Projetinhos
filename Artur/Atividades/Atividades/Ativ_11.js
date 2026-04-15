let Turma = ["GabsDuasCorrentes", "ShinoKeshin", "Origami", "Glyzi144", "Gl4d", "Dani", "Preto"]

console.log("Utilizando for \n")
for (let i = 0; i < Turma.length; i++){
    console.log("Bem vindo(a) " + Turma[i])
}
console.log("\n Utilizando for... of \n")
for (let value of Turma){
    console.log("Bem vindo(a) " + value)
}
