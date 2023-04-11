import { NegociacaoController } from "../controllers/negociacaoController.js";

let controller = new NegociacaoController();
let formulario = document.querySelector("#form");
let botaoFiltrar = document.querySelector("#botaoFiltrar");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.criarNegociacao();
});

botaoFiltrar.addEventListener("click", (e) => {
  e.preventDefault();
  controller.filtrarNegociacoes();
});
