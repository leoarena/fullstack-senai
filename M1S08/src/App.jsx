import { useState } from "react";
import CardAdicionar from "./CardAdicionar";
import ListItem from "./ListItem";

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  const criarTarefa = (inputTarefa) => {
    const tarefa = {
      id: tarefas.length + 1,
      texto: inputTarefa,
      finalizado: false,
    };
    setTarefas([...tarefas, tarefa]);
  };

  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((tarefa) => tarefa.id != id);
    setTarefas(novaLista);
  };

  return (
    <div className="app">
      <div className="titulo">
        <h1>To Do</h1>
      </div>
      <div className="conteudo">
        <CardAdicionar criarTarefa={criarTarefa} />

        {tarefas.map((tarefa) => (
          <ListItem tarefa={tarefa} removerTarefa={removerTarefa} />
        ))}
      </div>
    </div>
  );
}
