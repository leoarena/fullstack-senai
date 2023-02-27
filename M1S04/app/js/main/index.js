import { NegociacaoController } from "../controllers/negociacaoController.js";

let controller = new NegociacaoController();
let formulario = document.querySelector("#form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.criarNegociacao();
});
