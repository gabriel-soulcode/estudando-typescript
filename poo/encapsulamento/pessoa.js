var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.setSexo(sexo);
    }
    // getters (retornam o valor) e setters (inserem o valor)
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pessoa.prototype.getSexo = function () {
        return this.sexo ? "Femino" : "Masculino";
    };
    Pessoa.prototype.setSexo = function (sexo) {
        if (sexo == "M") {
            this.sexo = false;
        }
        else if (sexo == "F") {
            this.sexo = true;
        }
    };
    return Pessoa;
}());
var person = new Pessoa("Brenda", 22, "F");
console.log(person.getNome() + " " + person.getIdade() + " " + person.getSexo());
