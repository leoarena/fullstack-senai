const { Router } = require("express");
const rotas = Router();
const { atualizarLista } = require("../controllers");

rotas.patch("/atualizarLista", atualizarLista);

module.exports = rotas;
