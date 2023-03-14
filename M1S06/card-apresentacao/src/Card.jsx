import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Card({ usuario }) {
  const { nome, idade, foto, github, linkedin } = usuario;
  return (
    <div className="card">
      <div className="row1-div">
        <div className="info-div">
          <h1>{nome}</h1>
          <h2>{idade} anos</h2>
          <div className="links-div">
            <a href={github} target="_blank">
              <FaGithub />
            </a>
            <a href={linkedin} target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="image-div">
          <img src={foto} alt={nome} />
        </div>
      </div>
    </div>
  );
}
