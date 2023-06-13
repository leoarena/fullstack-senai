const { Router } = require("express");
const rotas = Router();
const {
  atualizarLista,
  gerarDatas,
  salvarDados,
  filtrarUsuarios,
  alterarDados,
} = require("../controllers");

rotas.patch("/atualizarLista", atualizarLista);
rotas.get("/gerarDatas", gerarDatas);
rotas.post("/salvarDados", salvarDados);
rotas.get("/filtrarUsuarios", filtrarUsuarios);
rotas.put("/alterarDados/:id", alterarDados);

module.exports = rotas;
