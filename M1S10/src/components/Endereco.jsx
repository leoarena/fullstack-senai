export default function Endereco() {
  return (
    <>
      <div className="m-5">
        <label htmlFor="inputLogradouro" className="form-label">
          Logradouro:
        </label>
        <input
          type="text"
          className="form-control"
          name="inputLogradouro"
          id="inputLogradouro"
          placeholder="Logradouro"
          required
        />
      </div>

      <div className="m-5">
        <label htmlFor="inputNumero" className="form-label">
          N°:
        </label>
        <input
          type="number"
          className="form-control"
          name="inputNumero"
          id="inputNumero"
          placeholder="N°"
          required
        />
      </div>

      <div className="m-5">
        <label htmlFor="inputBairro" className="form-label">
          Bairro:
        </label>
        <input
          type="text"
          className="form-control"
          name="inputBairro"
          id="inputBairro"
          placeholder="Bairro"
          required
        />
      </div>

      <div className="m-5">
        <label htmlFor="inputComplemento" className="form-label">
          Complemento:
        </label>
        <input
          type="text"
          className="form-control"
          name="inputComplemento"
          id="inputComplemento"
          placeholder="Complemento"
          required
        />
      </div>

      <div className="m-5">
        <label htmlFor="inputCidade" className="form-label">
          Cidade:
        </label>
        <input
          type="text"
          className="form-control"
          name="inputCidade"
          id="inputCidade"
          placeholder="Cidade"
          required
        />
      </div>

      <div className="m-5">
        <label htmlFor="inputCEP" className="form-label">
          CEP:
        </label>
        <input
          type="number"
          className="form-control"
          name="inputCEP"
          id="inputCEP"
          placeholder="CEP"
          required
        />
      </div>

      <div className="m-5">
        <label htmlFor="inputEstado" className="form-label">
          Estado:
        </label>
        <input
          type="text"
          className="form-control"
          name="inputEstado"
          id="inputEstado"
          placeholder="Estado"
          required
        />
      </div>
    </>
  );
}
