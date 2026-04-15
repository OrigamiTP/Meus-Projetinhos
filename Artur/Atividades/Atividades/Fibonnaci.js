//Fibonacci -> soma dos numeros anteriores para criar o próximo
//#region Usando For Loop
//let fibo1 = 0
//let fibo2 = 1
//let newFibo

/*
for(let i = 0; i < 18; i++){
    //Cria um nvo número a partir dos dois anteriores
    newFibo = fibo1 + fibo2
    //imprime o valor
    console.log(newFibo)
    //altera os valores
    fibo1 = fibo2
    fibo2 = newFibo
}
*/
//#endregion
//#region Usando função recursiva

let count = 0
function fibonacci(fibo1, fibo2){
    //contador para servir como condição para a continuidade ou parada da recursividade da função
    
    //Condição para controlar a recursividade da função
    if(count < 18){
        //criando um novo valor a partir dos dois anteriores
        let newFibo = fibo1 + fibo2
        //imprimindo o valor
        console.log(newFibo)
        //atualizando os valores
        fibo1 = fibo2
        fibo2 = newFibo
    }
    else{
        return
    }
    //Incremento para o contador para aproximar para o fim da recursividade
    count++
    //chamando a função dentro dela mesma, para q haja recursividade,
    //mas q não ficará eternamente nessa chamada, por conta do contador q criamos
    fibonacci(fibo1,fibo2)
}
fibonacci(0, 1)
return

//#endregion