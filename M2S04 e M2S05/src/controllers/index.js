const atualizarLista = (req, res) => {
  const listaModelo = [
    "Pedro",
    "José",
    "Aderbal",
    "Danilo",
    "Luisa",
    "Vitoria",
  ];

  let listaRecebida = req.body;
  let listaAtualizada = [];

  if (
    !Array.isArray(listaRecebida) ||
    Object.keys(listaRecebida).length === 0
  ) {
    return res.status(400).send({ mensagem: "Lista recebida vazia." });
  }

  const nomesInvalidos = listaRecebida.filter(
    (nome) => !listaModelo.includes(nome)
  );

  if (nomesInvalidos.length > 0) {
    res.status(400).send({
      mensagem: `Alguns nomes não fazem parte da lista: ${nomesInvalidos.join(
        ", "
      )}`,
    });
  }

  if (nomesInvalidos.length === 0) {
    const indexAleatorio = Math.floor(Math.random() * listaRecebida.length);
    [listaRecebida[0], listaRecebida[indexAleatorio]] = [
      listaRecebida[indexAleatorio],
      listaRecebida[0],
    ];
    listaAtualizada = listaRecebida;
    return res.status(200).send({
      mensagem: "Lista recebida atualizada com sucesso.",
      listaAtualizada,
    });
  }
};

module.exports = { atualizarLista };
