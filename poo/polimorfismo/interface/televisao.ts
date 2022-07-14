import { Eletrodomestico } from "./eletrodomestico";

export class Televisao implements Eletrodomestico {

    nome: string;
    voltagem: number;

    ligar(): void {
        console.log("Ligar pelo controle remoto.");
    }
}