import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header bg-body-secondary">
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul className="navbar-nav ">
          <li className="nav-item me-auto">
            {/* <a className="nav-link active" aria-current="page" href="#">
              Home
            </a> */}
            <Link className="nav-link active" to="/home" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            {/* <a class="nav-link" href="#">
              Quem sou
            </a> */}
            <Link className="nav-link" to="/quem-sou" >
              Quem sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
