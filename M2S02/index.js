const calculadora = require("./moduloCalculadora");

console.log(calculadora.somar(2, 3));
console.log(calculadora.subtrair(2, 3));
console.log(calculadora.dividir(12, 3));
console.log(calculadora.multiplicar(2, 3));

const separadorDeNumeros = require("./moduloSeparadorDeNumeros");

console.log(separadorDeNumeros([1, 2, 3, 4, 5, 6, 7, 8], 1));
console.log(separadorDeNumeros([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(separadorDeNumeros([1, 2, 3, 4, 5, 6, 7, 8], 3));
