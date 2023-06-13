const { Router } = require("express");
const rotas = Router();
const {
  atualizarLista,
  gerarDatas,
  salvarDados,
  filtrarUsuarios,
  alterarDados,
  deletarUsuario,
  nomeUsuario,
  converterString,
} = require("../controllers");

rotas.patch("/atualizarLista", atualizarLista);
rotas.get("/gerarDatas", gerarDatas);
rotas.post("/salvarDados", salvarDados);
rotas.get("/filtrarUsuarios", filtrarUsuarios);
rotas.put("/alterarDados/:id", alterarDados);
rotas.delete("/deletarUsuario/:id", deletarUsuario);
rotas.get("/nomeUsuario/:id", nomeUsuario);
rotas.post("/converterString", converterString);

module.exports = rotas;
