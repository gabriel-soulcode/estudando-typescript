var Computer = /** @class */ (function () {
    function Computer(processador, memoriaRam, offBoard) {
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.offBoard = offBoard;
    }
    Computer.prototype.getConfiguration = function () {
        return "\n            Processador: ".concat(this.processador, "\n            Mem\u00F3ria RAM (GB): ").concat(this.memoriaRam, "\n            Off Board: ").concat(this.offBoard ? "Tem" : "Não tem", "\n        ");
    };
    Computer.prototype.ligar = function () {
        console.log("Iniciando...");
    };
    return Computer;
}());
var pc = new Computer("Intel i3-4900", 8, true);
console.log(pc.getConfiguration());
pc.ligar();
