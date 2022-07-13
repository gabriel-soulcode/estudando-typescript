let message: string = "Hello World!";
//console.log(message);

let n: number = 15;
n = 12.5;
//console.log(n);

let test: boolean = true;
//console.log(test);

let numeros: Array<number> = [12, 23, 85, 65];
let nomes: string[] = ["Nico", "Augusto", "Debora"];
//console.log(numeros);
//console.log(nomes);

//let func: {nome: string, cargo: string, cpf: number}
type Funcionario = {
    nome: string,
    cargo: string,
    cpf: number
}
let func: Funcionario = {
    nome: "Gabriel",
    cargo: "Professor",
    cpf: 123456789
}
//console.log(func);

var nome: any = "Gabriel"; // Não tem tipagem
nome = 5;

var telefone: number | string = "123456879";
telefone = 123456789;