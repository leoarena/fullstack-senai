export default function DadosPessoaisForm() {
  return (
    <>
      <div className="m-5">
        <label htmlFor="inputNome" className="form-label">
          Nome:
        </label>
        <input
          type="text"
          className="form-control"
          name="inputNome"
          id="inputNome"
          placeholder="Digite o seu nome"
          required
        />
      </div>
      <div className="m-5">
        <label htmlFor="inputEmail1" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          name="inputEmail"
          id="inputEmail"
          placeholder="Digite o seu email"
          required
        />
      </div>
    </>
  );
}
