import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController {
  #campoData;
  #campoQuantidade;
  #campoValor;
  #campoFiltro;
  #listaNegociacoes;
  #tabelaNegociacoes;

  constructor() {
    this.#campoData = document.querySelector("#inputData");
    this.#campoQuantidade = document.querySelector("#inputQuantidade");
    this.#campoValor = document.querySelector("#inputValor");
    this.#campoFiltro = document.querySelector("#inputFiltro");
    this.#listaNegociacoes = new ListaNegociacoes();
    this.#tabelaNegociacoes = new NegociacoesView();
  }

  criarNegociacao() {
    let data = this.#campoData.value;
    let quantidade = this.#campoQuantidade.value;
    let valor = this.#campoValor.value;

    let negociacao = new Negociacao(data, quantidade, valor);

    this.#listaNegociacoes.adicionar(negociacao);
    this.#tabelaNegociacoes.adicionarLinha(negociacao);
  }

  filtrarNegociacoes() {
    let valorFiltro = this.#campoFiltro.value;
    let listaFiltrada = this.#listaNegociacoes.filtrarNegociacoes(valorFiltro);
    this.#tabelaNegociacoes.atualizarTabela(listaFiltrada);
  }
}
