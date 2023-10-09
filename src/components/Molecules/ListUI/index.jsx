//importacion de estilos
import { container, title as Title, button, icon } from "./ListUI.module.css";
//importacion de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ListUI = ({ title, IsCollapsed, setIsCollapsed }) => {
  return (
    <div className={container}>
      <p className={Title}>{title}:</p>
      <button
        className={button}
        onClick={() => {
          setIsCollapsed(!IsCollapsed);
        }}>
        {IsCollapsed === false && <FontAwesomeIcon icon={faChevronUp} className={icon} />}
        {IsCollapsed === true && <FontAwesomeIcon icon={faChevronDown} className={icon} />}
      </button>
    </div>
  );
};

export default ListUI;
