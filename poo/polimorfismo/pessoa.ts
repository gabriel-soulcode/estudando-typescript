abstract class Pessoa {
    nome: string;
    idade: number;
    cpf: string;

    abstract print(): void;
}

class Professor extends Pessoa {
    constructor(nome: string, idade: number, cpf: string, salario: number) {
        super();
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.salario  = salario;
    }
    salario: number;
    print(): void {
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        CPF: ${this.cpf}
        Salario: ${this.salario}
        `);
    };
}

class Aluno extends Pessoa {
    constructor(nome: string, idade: number, cpf: string, matricula: string) {
        super();
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.matricula  = matricula;
    }
    matricula: string;
    print(): void {
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        CPF: ${this.cpf}
        Matricula: ${this.matricula}
        `);
    }
}

let prof: Pessoa = new Professor("Icoma", 32, "415263987", 5000);
let aluno: Pessoa = new Aluno("Aecio", 23, "852147", "456321");

prof.print();
aluno.print();