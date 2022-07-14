export abstract class Pessoa {
    nome: string;
    idade: number;

    public abstract print(): void;

    public caminhar(): void {
        console.log("Caminhando...");
    }
}