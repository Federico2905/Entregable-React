//importacion de estilos
import { searchHistoryButton, searchHistoryIcon } from "./SearchHistory.module.css";
//importacion de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
//importaciones del Router
import { Link } from "react-router-dom";

const SearchHistoryButton = () => {
  return (
    <>
      <Link to="/searches">
        <button className={searchHistoryButton}>
          <FontAwesomeIcon icon={faClockRotateLeft} className={searchHistoryIcon} />
        </button>
      </Link>
    </>
  );
};
export default SearchHistoryButton;
