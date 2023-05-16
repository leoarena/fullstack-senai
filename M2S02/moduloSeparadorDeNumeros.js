const separadorDeNumeros = (arrayDeNumeros, opcao) => {
  let pares = arrayDeNumeros.filter((n) => n % 2 === 0);
  let impares = arrayDeNumeros.filter((n) => n % 2 != 0);

  switch (opcao) {
    case 1:
      return impares;
    case 2:
      return pares;
    case 3:
      return { Ímpares: impares, Pares: pares };
  }
};

module.exports = separadorDeNumeros;
