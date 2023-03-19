import PropTypes from "prop-types";

export default function Tabela({ negociacoes }) {
  const somaTotal = negociacoes.reduce(
    (total, { quantidade, valor }) => Number(total + quantidade * valor),
    0
  );

  return (
    <div className="my-5">
      <table className="table table-hover table-bordered">
        <thead className="table-primary">
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
          {negociacoes.map((negociacao, index) => (
            <tr key={index}>
              <td>{negociacao.data}</td>
              <td>{negociacao.quantidade}</td>
              <td>
                {negociacao.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {negociacao.valor *
                  negociacao.quantidade.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="3">
              <strong>Total</strong>
            </td>
            <td>
              {somaTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

Tabela.propTypes = {
  negociacoes: PropTypes.array.isRequired,
};
