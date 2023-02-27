import { Negociacao } from "../models/negociacao.js"
import { ListaNegociacoes } from "../models/listaNegociacoes.js"
import { NegociacoesView } from "../views/NegociacoesView.js"

export class NegociacaoController {
    #campoData
    #campoQuantidade
    #campoValor
    #listaNegociacoes
    #tabelaNegociacoes

    constructor() {
        this.#campoData = document.querySelector('#data')
        this.#campoQuantidade = document.querySelector('#quantidade')
        this.#campoValor = document.querySelector('#valor')
        this.#listaNegociacoes = new ListaNegociacoes()
        this.#tabelaNegociacoes = new NegociacoesView()
    }

    criarNegociacao() {
        let data = Date(this.#campoData.value)
        let quantidade = this.#campoQuantidade.value
        let valor = this.#campoValor.value
        
        let negociacao = new Negociacao(data, quantidade, valor)
        console.log(negociacao)

        this.#listaNegociacoes.adiciona(negociacao)

        let objetoNegociacoes = this.#listaNegociacoes.negociacoes
        console.log(objetoNegociacoes)

        this.#tabelaNegociacoes.adicionarLinha(data, quantidade, valor)
    }
}