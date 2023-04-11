import { SCPassosContainer, SCPasso } from "./passosStyledComponents";
import { FaUserAlt, FaHome, FaRegSmile } from "react-icons/fa";

export default function Passos({ passoAtual }) {
  return (
    <SCPassosContainer>
      <SCPasso ativo={passoAtual == 0 ? true : false}>
        <FaUserAlt /> Dados pessoais
      </SCPasso>

      <SCPasso ativo={passoAtual == 1 ? true : false}>
        <FaHome /> Endereço
      </SCPasso>

      <SCPasso ativo={passoAtual == 2 ? true : false}>
        <FaRegSmile /> Agradecimento
      </SCPasso>
    </SCPassosContainer>
  );
}
