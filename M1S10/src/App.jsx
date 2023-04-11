import useForm from "./hooks/useForm";
import Passos from "./components/Passos";
import DadosPessoaisForm from "./components/DadosPessoaisForm";
import Endereco from "./components/Endereco";
import Agradecimento from "./components/Agradecimento";
import {
  SCButton,
  SCFormContainer,
  SCHeader,
} from "./components/appStyledComponents";
import {
  GrFormNextLink,
  GrFormPreviousLink,
  GrFormCheckmark,
} from "react-icons/gr";

export default function App() {
  const { passoAtual, mudarPasso } = useForm();

  const componentesFormulario = [
    <DadosPessoaisForm />,
    <Endereco />,
    <Agradecimento />,
  ];

  return (
    <div className="app">
      <SCHeader>
        <h1>Cadastre-se gratuitamente!</h1>
        <p>
          Faça o seu cadastro para ter acesso a todos os recursos da nossa
          plataforma
        </p>
      </SCHeader>
      <SCFormContainer>
        <Passos passoAtual={passoAtual} />
        <form onSubmit={(evento) => mudarPasso(passoAtual + 1, evento)}>
          <div className="componente-atual">
            {componentesFormulario[passoAtual]}
          </div>
          <div className="botoes">
            {passoAtual !== 0 && (
              <SCButton
                type="button"
                onClick={(evento) => mudarPasso(passoAtual - 1, evento)}
              >
                <GrFormPreviousLink /> Voltar
              </SCButton>
            )}
            {passoAtual === 2 ? (
              <SCButton type="submit">
                Enviar <GrFormCheckmark />
              </SCButton>
            ) : (
              <SCButton type="submit">
                Avançar
                <GrFormNextLink />
              </SCButton>
            )}
          </div>
        </form>
      </SCFormContainer>
    </div>
  );
}
