//#region Animal
import { Animal, Pato, Leão } from "../Model/Model-POO.js";



const pato1 = new Pato("Frederick", "Super", "*Som de Águia*")

const leao1 = new Leão("Leon", "Leonino", "Ruuf Ruuf")

console.log(pato1)

console.log(leao1)
//#endregion

//#region Conta Do Nubank
import { ContaGenérica, ContaCorrente, ContaPoupança } from "../Model/Model-POO.js";

const ArturP = new ContaPoupança("Artur", 8001, 18)

const ArturC = new ContaCorrente("Artur", 1945, 18)

const MamãeP = new ContaPoupança("Mamãe", 999999, 18)

const MamãeC = new ContaCorrente("Mamãe", 67, 25)

ArturC.TransferirDinheiro(1878, MamãeC)

//#endregion