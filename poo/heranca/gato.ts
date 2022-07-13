import { Animal } from "./animal";

export class Gato extends Animal {
    
    constructor() {
        super("Gato", "Mamiferos");
    }

    public print() {
        console.log(this.nome + " " + this.classe);
    }
    
    public miar() {
        console.log("Miau...");
    }
}