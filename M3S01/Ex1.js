function P(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Teste a função
console.log(P(7)); // Saída esperada: true
console.log(P(12)); // Saída esperada: false

function validarNumeroPrimo(numero) {
  if (numero <= 1) return false;
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) return false;
  }
  return true;
}

console.log(validarNumeroPrimo(7));
console.log(validarNumeroPrimo(12));
