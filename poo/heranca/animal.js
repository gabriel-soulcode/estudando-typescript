"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
    Animal.prototype.comer = function () {
        console.log("Comendo...");
    };
    return Animal;
}());
exports.Animal = Animal;
