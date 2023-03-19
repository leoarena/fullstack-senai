import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

export default function App() {
  const [negociacoes, setNegociacoes] = useState([]);

  const adicionarNegociacao = (negociacao) => {
    setNegociacoes([...negociacoes, negociacao]);
  };

  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
        <Formulario adicionarNegociacao={adicionarNegociacao} />
        <Tabela negociacoes={negociacoes} />
      </div>
    </div>
  );
}
