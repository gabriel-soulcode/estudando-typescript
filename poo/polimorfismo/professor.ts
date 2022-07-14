import { Pessoa } from "./pessoa";

export class Professor extends Pessoa {
    salario: number;

    constructor(nome: string, idade: number, salario: number) {
        super();
        this.nome = nome;
        this.idade = idade;
        this.salario  = salario;
    }

    print(): void {
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        Salario: ${this.salario}
        `);
    };
}