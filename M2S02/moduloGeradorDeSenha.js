const geradorDeSenha = (tamanho) => {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const caractereAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[caractereAleatorio];
  }
  return senha;
};

module.exports = geradorDeSenha;
