//importacion de estilos
import { container, title as Title, button, icon, topSec, date as Date } from "./ListUI.module.css";
//importacion de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ListUI = ({ children, date, title, IsCollapsed, setIsCollapsed }) => {
  const [RealDate, setRealDate] = useState([]);
  const SeparateDate = () => {
    if (!date) {
      return;
    }
    const dateArr = date.split(",");
    setRealDate(dateArr);
  };
  useEffect(() => {
    SeparateDate();
  }, [date]);
  return (
    <div className={container}>
      <div className={topSec}>
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
      {date != undefined && (
        <p className={Date}>
          Searched on {RealDate[0]} at {RealDate[1]}
        </p>
      )}
      {IsCollapsed == false && <div> {children}</div>}
    </div>
  );
};

export default ListUI;
