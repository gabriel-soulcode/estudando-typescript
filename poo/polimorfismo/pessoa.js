var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, idade, cpf, salario) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.idade = idade;
        _this.cpf = cpf;
        _this.salario = salario;
        return _this;
    }
    Professor.prototype.print = function () {
        console.log("\n        Nome: ".concat(this.nome, "\n        Idade: ").concat(this.idade, "\n        CPF: ").concat(this.cpf, "\n        Salario: ").concat(this.salario, "\n        "));
    };
    ;
    return Professor;
}(Pessoa));
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, cpf, matricula) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.idade = idade;
        _this.cpf = cpf;
        _this.matricula = matricula;
        return _this;
    }
    Aluno.prototype.print = function () {
        console.log("\n        Nome: ".concat(this.nome, "\n        Idade: ").concat(this.idade, "\n        CPF: ").concat(this.cpf, "\n        Matriculo: ").concat(this.matricula, "\n        "));
    };
    return Aluno;
}(Pessoa));
var prof = new Professor("Icoma", 32, "415263987", 5000);
var aluno = new Aluno("Aecio", 23, "852147", "456321");
prof.print();
aluno.print();
