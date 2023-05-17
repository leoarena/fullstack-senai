// const calculadora = require("./moduloCalculadora");
// console.log(calculadora.somar(2, 3));
// console.log(calculadora.subtrair(2, 3));
// console.log(calculadora.dividir(12, 3));
// console.log(calculadora.multiplicar(2, 3));

// const separadorDeNumeros = require("./moduloSeparadorDeNumeros");
// console.log(separadorDeNumeros([1, 2, 3, 4, 5, 6, 7, 8], 1));
// console.log(separadorDeNumeros([1, 2, 3, 4, 5, 6, 7, 8], 2));
// console.log(separadorDeNumeros([1, 2, 3, 4, 5, 6, 7, 8], 3));

// const buscadorDeDDD = require("./moduloBuscadorDeDDD");
// console.log(buscadorDeDDD(11));
// console.log(buscadorDeDDD(21));
// console.log(buscadorDeDDD(27));
// console.log(buscadorDeDDD(31));
// console.log(buscadorDeDDD(41));
// console.log(buscadorDeDDD(47));
// console.log(buscadorDeDDD(51));
// console.log(buscadorDeDDD(61));
// console.log(buscadorDeDDD(63));
// console.log(buscadorDeDDD(65));
// console.log(buscadorDeDDD(67));
// console.log(buscadorDeDDD(68));
// console.log(buscadorDeDDD(69));
// console.log(buscadorDeDDD(71));
// console.log(buscadorDeDDD(79));
// console.log(buscadorDeDDD(81));
// console.log(buscadorDeDDD(82));
// console.log(buscadorDeDDD(83));
// console.log(buscadorDeDDD(84));
// console.log(buscadorDeDDD(85));
// console.log(buscadorDeDDD(86));
// console.log(buscadorDeDDD(91));
// console.log(buscadorDeDDD(92));
// console.log(buscadorDeDDD(95));
// console.log(buscadorDeDDD(96));
// console.log(buscadorDeDDD(98));
// console.log(buscadorDeDDD(123));

// const geradorDeSenha = require("./moduloGeradorDeSenha");
// console.log(geradorDeSenha(12));

const buscarCEP = require("./moduloBuscarCEP");
buscarCEP(88045300)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));
