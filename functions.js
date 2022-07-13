function printName(nome) {
    console.log("Nome: " + nome);
}
printName("Hirlem");
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 6));
function maior(n1, n2) {
    return (n1 > n2) ? n1 : n2; // operador ternario
}
console.log(maior(8, 10));
function isNegative(numero) {
    return (numero < 0);
}
console.log(isNegative(10));
function concat(a, b) {
    return a + b;
}
console.log(concat("Hello ", "World!"));
function isEmpty(a) {
    return (a.length <= 0);
}
console.log(isEmpty(""));
