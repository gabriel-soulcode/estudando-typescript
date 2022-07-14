import { Animal } from "./animal";

export class Gato extends Animal {
    
    constructor() {
        super("Gato", "Mamiferos");
    }

    public print() {
        console.log(this.classe + " -> " + this.nome);
    }
    
    public miar() {
        console.log("Miau...");
    }
}