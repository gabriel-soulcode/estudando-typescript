class Computer {

    constructor(processador: string, memoriaRam: number, offBoard: boolean) {
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.offBoard = offBoard;
    }

    processador: string;
    memoriaRam: number;
    offBoard: boolean;

    getConfiguration(): string {
        return `
            Processador: ${this.processador}
            Memória RAM (GB): ${this.memoriaRam}
            Off Board: ${this.offBoard ? "Tem" : "Não tem"}
        `;
    }
    ligar(): void {
        console.log("Iniciando...");
    }
}

let pc: Computer = new Computer("Intel i3-4900", 8, true);
console.log(pc.getConfiguration());
pc.ligar();