// class Forma {
//   constructor(tipo, medidas) {
//     this.tipo = tipo;
//     this.medidas = medidas;
//   }

//   calcularArea() {
//     if (this.tipo === "quadrado") {
//       return this.medidas.lado * this.medidas.lado;
//     } else if (this.tipo === "circulo") {
//       return Math.PI * this.medidas.raio * this.medidas.raio;
//     } else if (this.tipo === "triangulo") {
//       return (this.medidas.base * this.medidas.altura) / 2;
//     }
//   }

//   calcularPerimetro() {
//     if (this.tipo === "quadrado") {
//       return 4 * this.medidas.lado;
//     } else if (this.tipo === "circulo") {
//       return 2 * Math.PI * this.medidas.raio;
//     } else if (this.tipo === "triangulo") {
//       return this.medidas.lado1 + this.medidas.lado2 + this.medidas.lado3;
//     }
//   }
// }

// const forma1 = new Forma("quadrado", { lado: 5 });
// console.log("Área do quadrado:", forma1.calcularArea());
// console.log("Perímetro do quadrado:", forma1.calcularPerimetro());

// const forma2 = new Forma("circulo", { raio: 3 });
// console.log("Área do círculo:", forma2.calcularArea());
// console.log("Perímetro do círculo:", forma2.calcularPerimetro());

// const forma3 = new Forma("triangulo", {
//   base: 4,
//   altura: 6,
//   lado1: 3,
//   lado2: 4,
//   lado3: 5,
// });
// console.log("Área do triângulo:", forma3.calcularArea());
// console.log("Perímetro do triângulo:", forma3.calcularPerimetro());

class AreaQuadrado {
  constructor(lado) {
    this.lado = lado;
  }
  calcularArea() {
    return this.lado * this.lado;
  }
}

class AreaCirculo {
  constructor(raio) {
    this.raio = raio;
  }
  calcularArea() {
    return Math.PI * this.raio * this.raio;
  }
}

class AreaTriangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

class PerimetroQuadrado {
  constructor(lado) {
    this.lado = lado;
  }
  calcularPerimetro() {
    return 4 * this.lado;
  }
}

class PerimetroCirculo {
  constructor(raio) {
    this.raio = raio;
  }
  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

class PerimetroTriangulo {
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }
  calcularPerimetro() {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

class Forma {
  constructor(area, perimetro) {
    this.areaCalculo = area;
    this.perimetroCalculo = perimetro;
  }

  calcularArea() {
    return this.areaCalculo.calcularArea();
  }

  calcularPerimetro() {
    return this.perimetroCalculo.calcularPerimetro();
  }
}

const forma1 = new Forma(new AreaQuadrado(5), new PerimetroQuadrado(5));
console.log("Área do quadrado:", forma1.calcularArea());
console.log("Perímetro do quadrado:", forma1.calcularPerimetro());

const forma2 = new Forma(new AreaCirculo(3), new PerimetroCirculo(3));
console.log("Área do círculo:", forma2.calcularArea());
console.log("Perímetro do círculo:", forma2.calcularPerimetro());

const forma3 = new Forma(
  new AreaTriangulo(4, 6),
  new PerimetroTriangulo(3, 4, 5)
);
console.log("Área do triângulo:", forma3.calcularArea());
console.log("Perímetro do triângulo:", forma3.calcularPerimetro());
