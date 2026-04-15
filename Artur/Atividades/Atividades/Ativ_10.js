let ListaDeCompras = []
let frutas = ["Abacaxi", "Tamarindo", "Akuma no Mi"]
let outrasCoisax =["Pão", "Carne", "Ovo"]

for (let i = 0; i < frutas.length; i++){
    
    ListaDeCompras.push(frutas[i])
}

for(let j = 0; j < outrasCoisax.length; j++){
    ListaDeCompras.push(outrasCoisax[j])
}

console.log(ListaDeCompras[0] + "\n" + ListaDeCompras[5])

ListaDeCompras.pop(5)

for (let i = 0; i < ListaDeCompras.length; i++){
    console.log(ListaDeCompras[i])
}