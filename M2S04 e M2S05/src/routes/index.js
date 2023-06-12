const { Router } = require("express");
const rotas = Router();
const { atualizarLista, gerarDatas } = require("../controllers");

rotas.patch("/atualizarLista", atualizarLista);
rotas.get("/gerarDatas", gerarDatas);

module.exports = rotas;
