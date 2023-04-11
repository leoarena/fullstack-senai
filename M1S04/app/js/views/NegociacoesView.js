export class NegociacoesView {
  #tabelaNegociacoes;

  constructor() {
    this.#tabelaNegociacoes = document.querySelector("#table tbody");
  }

  adicionarLinha(negociacao) {
    const tr = document.createElement("tr");
    const tdData = document.createElement("td");
    const tdQuantidade = document.createElement("td");
    const tdValor = document.createElement("td");
    const tdValorTotal = document.createElement("td");

    tdData.textContent = negociacao.data;
    tdQuantidade.textContent = negociacao.quantidade;
    tdValor.textContent = negociacao.valor;
    tdValorTotal.textContent = negociacao.valorTotal;

    tr.appendChild(tdData);
    tr.appendChild(tdQuantidade);
    tr.appendChild(tdValor);
    tr.appendChild(tdValorTotal);

    this.#tabelaNegociacoes.appendChild(tr);
  }

  atualizarTabela(listaFiltrada) {
    this.#tabelaNegociacoes.innerHTML = "";
    listaFiltrada.forEach((negociacao) => {
      const tr = document.createElement("tr");
      const tdData = document.createElement("td");
      const tdQuantidade = document.createElement("td");
      const tdValor = document.createElement("td");
      const tdValorTotal = document.createElement("td");

      tdData.textContent = negociacao.data;
      tdQuantidade.textContent = negociacao.quantidade;
      tdValor.textContent = negociacao.valor;
      tdValorTotal.textContent = negociacao.valorTotal;

      tr.appendChild(tdData);
      tr.appendChild(tdQuantidade);
      tr.appendChild(tdValor);
      tr.appendChild(tdValorTotal);

      this.#tabelaNegociacoes.appendChild(tr);
    });
  }
}
