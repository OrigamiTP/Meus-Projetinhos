//#region Animal
export class Animal{
    constructor(nome, especie){
        this.nome = nome
        this.especie = especie
    }
}
export class Pato extends Animal {
    constructor(nome, especie, cor){
        super(nome, especie)
        this.cor = cor
    }
}
export class Leão extends Animal{
    constructor(nome, especie, rugido){
        super(nome, especie)
        this.rugido = rugido
    }
}
//#endregion

//#region Conta Do NuBank
export class ContaGenérica{
    constructor(nome, money, idade){
        this.nome = nome
        this.money = money
        this.idade = idade
    }
    depositar(dinheiro){
        this.money += dinheiro
        console.log(this.money)
    }
    sacar(dinheiro){
        if (dinheiro <= this.money){ 
            this.money -= dinheiro
            console.log(`dinero enviado para mamãe`)
        }
        else{
            console.log(`Sem dinero suficiente`)
        }
        console.log(this.money)
    }
}
export class ContaCorrente extends ContaGenérica{
    
    constructor(nome, money, idade){
        super(nome, money, idade)
    }
    TransferirDinheiro(dinheiro, conta){
        console.log(`Vc quer transferir dinero para quem?\n 
        1. Mãe\n 2. Irmão\n 3. Amante`)
        console.log(`ÉOQ? NÃO TÔ TE OUVINDO!! \n
            JÁ SEI!! VOU MANDAR PARA SUA MÃE!!`)
        if (dinheiro <= this.money){ 
            this.money -= dinheiro
            conta.money += dinheiro
            console.log(`Vc enviou ${dinheiro} reaix para ${conta.nome}`)
            console.log(`Dinheiro atual: ${this.money} \n Dinheiro atual de ${conta.nome}: ${conta.money}`)
        }
        else{
            console.log(`Sem dinero suficiente`)
        }
          
    }
}
export class ContaPoupança extends ContaGenérica{
    constructor(nome, money, idade){
        super(nome, money, idade)
    }
    RenderDinheiro(){
        let dinheiroRendido = this.money *0.005 
        this.money += dinheiroRendido

        console.log(`Vc poupou ${this.money}`)
    }
}

//#endregion
