const buscarCEP = async (cep) => {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const objetoJS = await resposta.json();
    const { logradouro, bairro, localidade, uf } = objetoJS;
    const resultado = {
      Rua: logradouro,
      Bairro: bairro,
      Cidade: localidade,
      Estado: uf,
    };
    return resultado;
  } catch (error) {
    throw error;
  }
};

module.exports = buscarCEP;
