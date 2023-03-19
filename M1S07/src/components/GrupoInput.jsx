import PropTypes from "prop-types";

export default function GrupoInput({
  tipo,
  etiqueta,
  id,
  min,
  step,
  valor,
  aoDigitar,
}) {
  return (
    <div className="form-group col">
      <label htmlFor={id}>{etiqueta}</label>
      <input
        type={tipo}
        id={id}
        min={min}
        step={step}
        value={valor}
        onChange={aoDigitar}
        className="form-control"
        required
      />
    </div>
  );
}

GrupoInput.propTypes = {
  tipo: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  valor: PropTypes.string.isRequired,
  aoDigitar: PropTypes.func.isRequired,
};
