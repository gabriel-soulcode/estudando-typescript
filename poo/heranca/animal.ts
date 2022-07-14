export class Animal {
    
    protected nome: string;
    protected classe: string;

    public comer() {
        console.log("Comendo...");
    }

    constructor(nome: string, classe: string) {
        this.nome = nome;
        this.classe = classe;
    }
}