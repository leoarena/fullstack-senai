import { useState } from "react";

export default function CardAdicionar({ criarTarefa }) {
  const [inputTarefa, setInputTarefa] = useState("");

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (inputTarefa != "") {
      criarTarefa(inputTarefa);
      setInputTarefa("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputTarefa}
        onChange={(e) => setInputTarefa(e.target.value)}
        placeholder="Adicione uma tarefa"
      />
      <button className="adicionar" onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}
