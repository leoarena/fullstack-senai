const { Router } = require("express");
const rotas = Router();
const { atualizarLista, gerarDatas, salvarDados } = require("../controllers");

rotas.patch("/atualizarLista", atualizarLista);
rotas.get("/gerarDatas", gerarDatas);
rotas.post("/salvarDados", salvarDados);

module.exports = rotas;
