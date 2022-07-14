class Computer {

    constructor(
        public processador: string,
        public memoriaRam: number,
        public offBoard: boolean) {
    }

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