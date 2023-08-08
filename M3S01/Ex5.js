class ListaTarefas {
  constructor() {
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
  }

  exibirTarefasPorEstado(estado) {
    console.log(`Tarefas: ${estado}`);
    this.tarefas.forEach((tarefa) => {
      if (tarefa.estadoAtual.estado === estado) {
        console.log(`- ${tarefa.titulo}`);
      }
    });
    console.log("------------------------");
  }
}

class EstadoTarefa {
  constructor(estado) {
    this.estado = estado;
  }

  exibirEstado() {
    console.log(`Estado: ${this.estado}`);
  }
}

class TarefaAFazer extends EstadoTarefa {
  constructor() {
    super("A fazer");
  }
  atualizarEstado(tarefa) {
    tarefa.mudarEstado(new TarefaEmAndamento());
  }
}

class TarefaEmAndamento extends EstadoTarefa {
  constructor() {
    super("Em andamento");
  }
  atualizarEstado(tarefa) {
    tarefa.mudarEstado(new TarefaConcluida());
  }
}

class TarefaConcluida extends EstadoTarefa {
  constructor() {
    super("Concluída");
  }
}

class Tarefa {
  constructor(titulo, descricao) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.estadoAtual = new TarefaAFazer();
  }

  exibirDetalhes() {
    console.log(`Tarefa: ${this.titulo}`);
    console.log(`Descrição: ${this.descricao}`);
    this.estadoAtual.exibirEstado();
    console.log("------------------------");
  }

  atualizarEstado() {
    this.estadoAtual.atualizarEstado(this);
  }

  mudarEstado(novoEstado) {
    this.estadoAtual = novoEstado;
  }
}

const listaTarefas = new ListaTarefas();
const tarefa1 = new Tarefa("Tarefa 1", "Conteúdo tarefa 1.");
const tarefa2 = new Tarefa("Tarefa 2", "Conteúdo tarefa 2.");
const tarefa3 = new Tarefa("Tarefa 3", "Conteúdo tarefa 3.");
listaTarefas.adicionarTarefa(tarefa1);
listaTarefas.adicionarTarefa(tarefa2);
listaTarefas.adicionarTarefa(tarefa3);

tarefa3.atualizarEstado();

listaTarefas.exibirTarefasPorEstado("A fazer");
listaTarefas.exibirTarefasPorEstado("Em andamento");
listaTarefas.exibirTarefasPorEstado("Concluída");
