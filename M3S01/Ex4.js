class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  getNome() {
    return this.nome;
  }

  getPreco() {
    return this.preco;
  }
}

class PedidoItem {
  constructor(produto, quantidade) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  getProduto() {
    return this.produto;
  }

  getQuantidade() {
    return this.quantidade;
  }

  calcularSubtotal() {
    return this.produto.getPreco() * this.quantidade;
  }
}

class Pedido {
  constructor() {
    this.itens = [];
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  calcularTotal() {
    return this.itens.reduce(
      (total, item) => total + item.calcularSubtotal(),
      0
    );
  }
}

class NotaFiscal {
  gerarNotaFiscal(pedido) {
    console.log("----- NOTA FISCAL -----");
    pedido.itens.forEach((item) => {
      const produto = item.getProduto();
      console.log(
        `${produto.getNome()} - R$${produto.getPreco()} x ${item.getQuantidade()} = R$${item.calcularSubtotal()}`
      );
    });
    console.log("TOTAL: R$", pedido.calcularTotal());
    console.log("-----------------------");
  }
}

const produtoA = new Produto("produto A", 10, 40);
const produtoB = new Produto("produto B", 20, 80);

const item1 = new PedidoItem(produtoA, 30);
const item2 = new PedidoItem(produtoB, 60);

const pedido = new Pedido();
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);

const notaFiscal = new NotaFiscal();
notaFiscal.gerarNotaFiscal(pedido);
