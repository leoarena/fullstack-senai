import GrupoInput from "./GrupoInput";
import PropTypes from "prop-types";
import { useState } from "react";
import { format, parseISO } from "date-fns";

export default function Formulario({ adicionarNegociacao }) {
  const [data, setData] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  const validarDados = () => {
    if (!data || !quantidade || !valor) alert("Preencha todos os campos.");
    else return true;
  };

  const handleAdicionarNegociacao = (e) => {
    e.preventDefault();
    if (validarDados()) {
      const negociacao = {
        data: format(parseISO(data), 'dd/MM/yyyy'),
        quantidade: quantidade,
        valor: valor,
      };
      adicionarNegociacao(negociacao);
      setData("");
      setQuantidade("");
      setValor("");
    }
  };

  return (
    <form className="form container">
      <div className="row">
        <GrupoInput
          tipo="date"
          etiqueta="Data"
          id="data"
          valor={data}
          aoDigitar={(e) => setData(e.target.value)}
        />
        <GrupoInput
          tipo="number"
          etiqueta="Quantidade"
          id="data"
          valor={quantidade}
          min={1}
          step={1}
          aoDigitar={(e) => setQuantidade(e.target.value)}
        />
        <GrupoInput
          tipo="number"
          etiqueta="Valor"
          id="data"
          valor={valor}
          min={0.01}
          step={0.01}
          aoDigitar={(e) => setValor(e.target.value)}
        />

        <div className="col-1 d-flex align-items-end justify-content-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAdicionarNegociacao}
          >
            Incluir
          </button>
        </div>
      </div>
    </form>
  );
}

Formulario.propTypes = {
  adicionarNegociacao: PropTypes.func.isRequired,
};
