//Importacion de estilos
import { homeButton } from "./HomeButton.module.css";
//Importacion de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
//Importaciones del Router
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link className={homeButton} to="/">
      <button>
        <FontAwesomeIcon icon={faChevronLeft} /> Home page
      </button>
    </Link>
  );
};
export default HomeButton;
