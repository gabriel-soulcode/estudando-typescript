function printName(nome: string): void {
    console.log("Nome: " + nome);
}
//printName("Hirlem");

function somar(n1: number, n2: number): number {
    return n1 + n2;
}
//console.log(somar(2, 6));

function maior(n1: number, n2: number): number {
    return (n1 > n2) ? n1 : n2; // operador ternario
}
//console.log(maior(8, 10));

function isNegative(numero: number): boolean {
    return (numero < 0);
}
//console.log(isNegative(10));

function concat(a: string, b: string): string {
    return a + b;
}
//console.log(concat("Hello ", "World!"));

function isEmpty(a: string): boolean {
    return (a.length <= 0);
}
//console.log(isEmpty(""));