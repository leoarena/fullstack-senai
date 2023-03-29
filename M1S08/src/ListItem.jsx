import { useState } from "react";

export default function ListItem({ tarefa, removerTarefa }) {
  const [finalizado, setFinalizado] = useState(tarefa.finalizado);

  const handleFinalizarTarefa = (e) => {
    e.preventDefault();
    setFinalizado(!finalizado);
  };

  const handleRemoverTarefa = (e) => {
    e.preventDefault();
    removerTarefa(tarefa.id);
  };

  return (
    <div>
      {finalizado ? (
        <li key={tarefa.id}>
          <p className="finalizado">{tarefa.texto}</p>
          <button className="finalizar" onClick={handleFinalizarTarefa}>
            Finalizar
          </button>
          <button className="remover" onClick={handleRemoverTarefa}>
            Remover
          </button>
        </li>
      ) : (
        <li key={tarefa.id}>
          <p>{tarefa.texto}</p>
          <button className="finalizar" onClick={handleFinalizarTarefa}>
            Finalizar
          </button>
          <button className="remover" onClick={handleRemoverTarefa}>
            Remover
          </button>
        </li>
      )}
    </div>
  );
}
