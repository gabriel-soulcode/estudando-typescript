import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa {
    matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        super();
        this.nome = nome;
        this.idade = idade;
        this.matricula  = matricula;
    }

    print(): void {
        console.log(`
        +--------------ALUNO--------------+
        Nome: ${this.nome}
        Idade: ${this.idade}
        Matricula: ${this.matricula}
        `);
    }
}