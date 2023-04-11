export default function Agradecimento() {
  return (
    <div className="m-5">
      <p>Obrigado pelo seu cadastro!</p>
      <label htmlFor="selectPesquisa">Conte-nos: onde nos conheceu?</label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="selectPesquisa"
      >
        <option>Selecione</option>
        <option value="site">Pelo site</option>
        <option value="linkedin">Pelo LinkedIn</option>
        <option value="instagram">Pelo Instagram</option>
      </select>
    </div>
  );
}
