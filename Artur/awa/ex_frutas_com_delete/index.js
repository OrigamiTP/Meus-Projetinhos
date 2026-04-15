let carrinho = []

function adicionar() {
    let item = document.getElementById('item').value.trim()
    let quantidade = document.getElementById('quantidade').value.trim()

    if (!item || !quantidade) {
        alert("Todos os campos devem estar preenchidos.")
        return
    }


    quantidade = Number(quantidade)

    if (isNaN(quantidade)) {
        alert("Quantidade deve ser um número.")
        return
        /*
        pq não escreveu:"quantidade = isNaN"?
        tem que dificultar?
        */
    }
    
    carrinho.push({item:item, quantidade:quantidade})
    atualizar()
}

function remover() {
    let item = document.getElementById("rm-item").value.trim()

    if (!item) {
        alert("Todos os campos devem estar preenchidos.")
        return
    }

    const index = carrinho.findIndex((e) => e.item === item)
    if (index >= 0) {
        carrinho.splice(index, 1)
        atualizar()
        /*
        Qual a necessidade desse "e" entre parenteses?
        Não poderia simplesmente escrever:"carrinho.findIndex(item)"?
        É conflito por conta do nome da variavel local e o elemento do array?
        */
    }
}

function atualizar() {
    document.getElementById("itens").innerHTML = ""

    carrinho.forEach((e) => {
        document.getElementById("itens").innerHTML += "<li>" + e.quantidade + " " + e.item + "</li>"

        /*Ao invés de escrever cada elemento do array individualmente escrevendo:"carrinho[i].quantidade" e
        o mesmo para o elemento do item e tendo q criar até um estrutura de repetição para isso funcionar.

        Foi criado uma "função fantasma"(eu sei q o nome não é esse), chamando o array inteiro para dentro 
        da função sem necessitar de chamá-lo para cada elemento dentro dele e foi utilizado um método 
        forEach para direcionar aos elementos do array chamado.

        mas o q seria "e"?*/
    })
}