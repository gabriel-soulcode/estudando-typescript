/*
POLIMORFISMO consiste na alteracao do funcionamento interno de um metodo herdado de um objeto pai.
*/

import { Pessoa } from "./pessoa";
import { Professor } from "./professor";
import { Aluno } from "./aluno";

let prof: Pessoa = new Professor("Icoma", 32, 5000);
let aluno: Pessoa = new Aluno("Aecio", 23, "456321");

prof.print();
aluno.print();
prof.caminhar();
aluno.caminhar();