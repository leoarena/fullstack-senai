const fs = require("fs");
const path = require("path");

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

const salvarDados = (req, res) => {
  const dadosRequisicao = req.body;

  let arrayRequisicao = [];
  if (Object.keys(dadosRequisicao).length > 0) {
    arrayRequisicao = Array.isArray(dadosRequisicao)
      ? dadosRequisicao
      : [dadosRequisicao];
  }

  let objetoDados = [];
  try {
    const dadosJSON = fs.readFileSync(
      path.join(__dirname, "../database/dados.json")
    );
    objetoDados = JSON.parse(dadosJSON);
  } catch (error) {
    console.log("Não existem dados salvos.");
  }

  objetoDados.push(...arrayRequisicao);
  fs.writeFileSync(
    path.join(__dirname, "../database/dados.json"),
    JSON.stringify(objetoDados)
  );
  return res.status(200).send(objetoDados);
};

const filtrarUsuarios = (req, res) => {
  const usuariosJSON = require("../database/user.json");
  const { ageMin, ageMax, state, job } = req.query;
  let usuariosFiltrados = usuariosJSON;

  if (ageMin)
    usuariosFiltrados = usuariosFiltrados.filter(
      (usuario) => usuario.age >= ageMin
    );

  if (ageMax)
    usuariosFiltrados = usuariosFiltrados.filter(
      (usuario) => usuario.age <= ageMax
    );

  if (state)
    usuariosFiltrados = usuariosFiltrados.filter(
      (usuario) => usuario.state.toLowerCase() === state.toLowerCase()
    );

  if (job)
    usuariosFiltrados = usuariosFiltrados.filter(
      (usuario) => usuario.job.toLowerCase() === job.toLowerCase()
    );

  return res.status(200).send(usuariosFiltrados);
};

const alterarDados = (req, res) => {
  const usuariosJSON = require("../database/user.json");
  const { id } = req.params;
  const dadosNovos = req.body;

  const indexUsuariosJSON = usuariosJSON.findIndex(
    (usuario) => usuario.id === Number(id)
  );

  if (indexUsuariosJSON === -1) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }

  const usuarioUsuariosJSON = usuariosJSON[indexUsuariosJSON];

  let existemAlteracoes = false;
  for (const chave in dadosNovos) {
    if (dadosNovos[chave] !== usuarioUsuariosJSON[chave]) {
      existemAlteracoes = true;
      break;
    }
  }

  if (!existemAlteracoes)
    return res.send({ mensagem: "Não existem alterações." });

  const usuarioAtualizado = { ...usuarioUsuariosJSON, ...dadosNovos };
  usuariosJSON[indexUsuariosJSON] = usuarioAtualizado;

  fs.writeFileSync(
    path.join(__dirname, "../database/user.json"),
    JSON.stringify(usuariosJSON)
  );

  return res
    .status(200)
    .send({ mensagem: "Dados alterados com sucesso.", usuarioAtualizado });
};

const deletarUsuario = (req, res) => {
  const usuariosJSON = require("../database/user.json");
  const { id } = req.params;

  const indexUsuariosJSON = usuariosJSON.findIndex(
    (usuario) => usuario.id === Number(id)
  );

  if (indexUsuariosJSON === -1) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }

  const usuariosAtualizados = usuariosJSON.filter(
    (usuario) => usuario.id !== Number(id)
  );

  fs.writeFileSync(
    path.join(__dirname, "../database/user.json"),
    JSON.stringify(usuariosAtualizados)
  );

  return res.status(200).send({ mensagem: "Usuário deletado com sucesso." });
};

module.exports = {
  atualizarLista,
  gerarDatas,
  salvarDados,
  filtrarUsuarios,
  alterarDados,
  deletarUsuario,
};
