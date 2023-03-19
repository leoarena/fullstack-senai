import PropTypes from "prop-types";

export default function Header({ titulo }) {
  // Você pode modificar este arquivo, ou até apagá-lo,
  // caso use o seu próprio projeto desenvolvido durante
  // as primeiras semanas.

  return <h1 className="text-center py-5 bg-primary text-light">{titulo}</h1>;
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
