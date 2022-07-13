class Pessoa {
    private nome: string;
    private idade: number;
    private sexo: boolean; //0 M 1 F

    constructor(nome: string, idade: number, sexo: string) {
        this.setNome(nome);
        this.setIdade(idade);
        this.setSexo(sexo);
    }

    // getters (retornam o valor) e setters (inserem o valor)
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
        return this.sexo ? "Feminino" : "Masculino";
    }
    public setSexo(sexo: string): void {
        if(sexo == "M") {
            this.sexo = false;
        }
        else if(sexo == "F") {
            this.sexo = true;
        }
    }
}

let person: Pessoa = new Pessoa("Brenda", 22, "F");
console.log(person.getNome() + " " + person.getIdade() + " " + person.getSexo());