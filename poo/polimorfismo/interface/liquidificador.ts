import { Eletrodomestico } from "./eletrodomestico";

export class Liquidificador implements Eletrodomestico {

    nome: string;
    voltagem: number;

    ligar(): void {
        console.log("Liga pelo interruptor com niveis diferentes de velocidade.");
    }
}