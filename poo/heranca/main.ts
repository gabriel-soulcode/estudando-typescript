/*
A HERANCA trata-se da capacidade que uma classe tem de "herdar" propriedades e metodos de outro classe.
*/

import { Gato } from "./gato";

let gato: Gato = new Gato();
gato.comer(); // Metodo herdado da classe Animal
gato.miar(); // Metodo implementado na classe Gato
gato.print(); // Metodo herdado da classe Animal e implementado na classe Gato