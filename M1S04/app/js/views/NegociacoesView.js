export class NegociacoesView {
    #tabelaNegociacoes


    constructor() {
        this.#tabelaNegociacoes = document.querySelector('#table')
    }

    adicionarLinha(data, quantidade, valor) {
        let celulaData = document.querySelector('#tdData');
        let celulaQuantidade = document.querySelector('#tdQuantidade');
        let celulaValor = document.querySelector('#tdValor');

        celulaData.innerHTML = data
        celulaQuantidade.innerHTML = quantidade
        celulaValor.innerHTML = valor
    }
}