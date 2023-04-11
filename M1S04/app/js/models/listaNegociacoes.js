export class ListaNegociacoes {
  #negociacoes;

  constructor() {
    this.#negociacoes = [];
  }

  adicionar(negociacao) {
    this.#negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this.#negociacoes);
  }

  filtrarNegociacoes(valorMinimo) {
    return this.#negociacoes.filter(
      (negociacao) => negociacao.valorTotal >= valorMinimo
    );
  }
}
