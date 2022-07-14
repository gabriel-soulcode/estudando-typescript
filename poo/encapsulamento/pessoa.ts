/*
ENCAPSULAMENTO trata-se de definir propriedades privadas fazendo com que outras classes não possam acessa-las e modifica-las diretamente, encapsulando as propriedades dentro da classe. Obrigando o desenvolvedor a usar os metodos de manipulação GET e SET para acessar e modificar as propriedades indiretamente.
*/

class Pessoa {
    private nome: string;
    private idade: number;
    private sexo: string;

    constructor(nome: string, idade: number, sexo: string) {
        this.setNome(nome);
        this.setIdade(idade);
        this.setSexo(sexo);
    }

    // GET E SET
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public getIdade(): number {
        return this.idade;
    }
    public setIdade(idade: number): void {
        this.idade = idade;
    }
    public getSexo(): string {
        return this.sexo;
    }
    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }
}

let person: Pessoa = new Pessoa("Brenda", 22, "F");
console.log(person.getNome() + " " + person.getIdade() + " " + person.getSexo());