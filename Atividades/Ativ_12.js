const notas = [2, 5, 8, 3, 9, 4, 0]
let soma = 0
let media = 0

function Somar(){
    for(let i = 0;i < notas.length; i++){
        soma += notas[i]
        media = soma / notas.length
    }
    console.log("As Notas são: " + notas)
    console.log("A Média das Notas é: " + media.toFixed(2))

    /* Utilizando Math.max() e Math.min()
    console.log("A Menor nota é: " + Math.min(...notas) + "\n" + 
    "A Maior Nota é: " + Math.max(...notas))
    */
    /*Pegando o maior e o menor valor SEM UTILIZAR MATH!*/
    //Utilizar BubbleSort

    let minvalue = notas[0]
    for(let i = 0; i < notas.length; i++){
        if (notas[i] < minvalue){
            minvalue = notas[i]
        }
    }

    let maxvalue = notas[6]

    for(let i = 6; i >= 0; i--){
        if (maxvalue < notas[i]){
            maxvalue = notas[i]
        }
    }
    console.log(`Lowest value: ${minvalue} \nHighest value: ${maxvalue}`)
}
Somar()