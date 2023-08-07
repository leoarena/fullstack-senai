function fatorial(n) {
  if (n === 0) return 1;
  else return n * fatorial(n - 1);
}

// Teste a função
console.log(fatorial(5)); // Saída esperada: 120
console.log(fatorial(0)); // Saída esperada: 1
console.log(fatorial(10)); // Saída esperada: 3628800

function calcularFatorial(numero) {
  if (numero === 0) return 1;

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) fatorial *= i;

  return fatorial;
}

console.log(calcularFatorial(5));
console.log(calcularFatorial(0));
console.log(calcularFatorial(10));
