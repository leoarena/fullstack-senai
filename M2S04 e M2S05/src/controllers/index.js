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

const gerarDatas = (req, res) => {
  const { mes } = req.query;

  if (mes < 1 || mes > 12) {
    return res.status(400).send({ mensagem: "Mẽs inválido." });
  }

  const datas = [];
  const ano = new Date().getFullYear();

  for (let dia = 1; dia <= 31; dia++) {
    const data = new Date(ano, mes - 1, dia);

    if (data.getMonth() === mes - 1) {
      const dataFormatada = `${dia.toString().padStart(2, "0")}/${mes
        .toString()
        .padStart(2, "0")}/${ano}`;
      datas.push(dataFormatada);
    }
  }
  res.status(200).send(datas);
};

module.exports = { atualizarLista, gerarDatas };
