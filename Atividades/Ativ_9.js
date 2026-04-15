

function ClassNum(num) {
    if(typeof num == "number"){
        if (num < 0){
            console.log("Número Negativo")
            return
        }
        else if (num == 0){
            console.log("Número ser zero")
            return
        }
        else if (num > 0){
            console.log("Numero Positivo")
            return
        }
    }
    else if(typeof num !== "number"){
        console.log("Eu quero um número")
        return
    }
}
ClassNum(10)