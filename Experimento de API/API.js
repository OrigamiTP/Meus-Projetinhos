let currentURL = "https://pokeapi.co/api/v2/pokemon/"

//trazer os botões do html(front-end) para utilizar no js(back-end)
const prev = document.getElementById("prev")
const loadi = document.getElementById("load")
const next = document.getElementById("next")
let info = document.getElementById("info")

/*
Armazenar o json e utilizá-lo dentro do código para funções como
carregar a página atual, atualizar para a anterior ou  a próxima página da API
*/
let currentJSON = {}

/*
por meio da variavel criada para armazenar o valor dos botões dentro do html, é possível
utilizar o addEventlistener() para identificar quando o botão é utilizado através duma
função interna do js sendo utilizada como parametro neste caso, colocando aspas duplas e dentro 
dessas aspas tendo escrito "click" (dessa forma, mesmo), e utilizando outra função interna 
(também utilizada como parametro) do js-json para nesse caso carregar a página e/ou atualizar a 
página e ir para outra página(anterior ou posterior), sendo respectivamente "load", 
"previousPage", "nextPage" para cada uma delas.

Assim então, sendo utilizada para identificar uma ação dentro do html e executar uma ação
parte do js, uma ação consecutiva em relação ao parametro de ação do html

Ex:. variavel_de_referencia.addEventListener("ação dentro do html",ação consecutiva à ser 
executada dentro do js).
*/
prev.addEventListener("click", previousPage)
loadi.addEventListener("click",load)
next.addEventListener("click",nextPage)

/*
Função responsável por carregar a página da API através do JSON e seus lacaios.
*/
async function load(){
    currentJSON = await fetch(currentURL).then(res => res.json())
    //Armazena o API, que está sendo "tragado" pelo JSON
    info.innerText = JSON.stringify(currentJSON)
}

/*

*/
async function previousPage(){
    if (!currentJSON.previous)
        return

    currentURL = currentJSON.previous
    currentJSON = await fetch(currentURL).then(res => res.json())
    info.innerText = JSON.stringify(currentJSON)
}
async function nextPage(){
    if (!currentJSON.next)
        return

    currentURL = currentJSON.next
    currentJSON = await fetch(currentURL).then(res => res.json())
    info.innerText = JSON.stringify(currentJSON)

}