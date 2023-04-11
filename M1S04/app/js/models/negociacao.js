export class Negociacao {
  #data;
  #quantidade;
  #valor;
  #valorTotal;

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
    this.#valorTotal = quantidade * valor;
  }

  get data() {
    return this.#data;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get valor() {
    return this.#valor;
  }

  get valorTotal() {
    return this.#valorTotal;
  }
}
