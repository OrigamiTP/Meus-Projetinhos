let doencaStatus = ["Saudavel", "Gripe", "Febril","Atrofiação Muscular", "Morte"]
let irritabilidade = ["Alegre", "Feliz", "Neutro", "AAAAAAAAAAAAAAAAAAAAAAAAHH!!", "... raiva transcendental *música de phonk começa a tocar*"]

class Peixe{
    constructor(nome, especie, qntdNadadeiras, tipoDeAgua) {
        this.nome = nome,
        this.especie = especie,
        this.qntdNadadeiras = qntdNadadeiras,
        this.tipoDeAgua = tipoDeAgua 
        
    }
    Nadar(){console.log("NAdar")}
    Comer(){console.log("Comer")}
}
class Leão{
    constructor(nome, especie, tamanho){
        this.nome = nome,
        this.especie = especie,
        this.tamanho = tamanho
    }
    Comer(){console.log("*comendo*")}
    Correr(){console.log("*Correndo*")}
    Rugir(){console.log("Ruuf Ruuf")}
}
class Mosquito{
    constructor(nome, especie, doença, tamanho){
        this.nome = nome
        this.especie = especie
        this.doença =  doença
        this.tamanho = tamanho
    }
    Voar(){console.log("I believe i can fly!!")}
    TransmitirDoença(){console.log("atacar!! \n" + "Alvo com: " + doencaStatus[3])}
    Zii(){console.log("Modo irritar: ativado \n" 
        + "mosquito: ziiiii \n" 
        + "Pessoa: Sai daqui diacho, seu mosquito bobão! \n" 
        + "Mosquito pensamentos: Consegui!! \n" 
        + "Voz do Sistema: Irritabilidade do alvo aumentada \n" 
        + "Pessoa pensamentos: " + irritabilidade[3] )}

}
class Pato {
    constructor(nome, especie, tamanho, idade){
        this.nome = nome,
        this.especie = especie,
        this.tamanho = tamanho
        this.idade = idade
    }
    Nadar(){console.log("Nadando medianamente")}
    Voar(){console.log("Voando medianamente")}
    Andar(){console.log("Andando medianamente")}
}

const mosquito1 = new Mosquito("Musquitin", "aedysegipt", "Dengue", "Grande")

const leao1 = new Leão("Leon", "Selvagem", "Grande")

const peixe1 = new Peixe("Nemo", "Palhaço", "5.3", "molhada")

const pato1 = new Pato("Patolino", "Amarelo", "existente", "Alguma entre 0 e '8 deitado'")

peixe1.Nadar()

leao1.Rugir()

mosquito1.Zii()

pato1.Voar()


