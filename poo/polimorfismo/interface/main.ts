import { Eletrodomestico } from "./eletrodomestico";
import { Liquidificador } from "./liquidificador";
import { Televisao } from "./televisao";

let liqu: Eletrodomestico = new Liquidificador();
let tele: Eletrodomestico = new Televisao();

liqu.ligar();
tele.ligar();