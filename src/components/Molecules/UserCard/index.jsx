//Importacion de estilos
import { container, containerSec, infoList, img, detailsButton } from "./UserCard.module.css";
//importacion de hooks
import { useContext } from "react";
//importacion de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCalendar, faUserGroup } from "@fortawesome/free-solid-svg-icons";
//importacion de utils
import { ParseDate } from "../../../utils/ParseDate";
//Importacion del Router
import { Link } from "react-router-dom";
//importacion de un context
import { userContext } from "../../../contexts/userContext";

const UserCard = ({ User }) => {
  const { setCurrentUser } = useContext(userContext);
  let { avatar_url, login, name, email, followers, created_at } = User;

  if (!email) {
    email = "No email registered";
  }
  if (!name) {
    name = login;
  }
  return (
    <div className={container}>
      <div className={containerSec}>
        <img src={avatar_url} className={img} />
        <div>
          <ul className={infoList}>
            <li>
              <b>Username:</b> {name}
            </li>
            <li>
              <b>Email:</b> {email} {email !== "No email registered" && <FontAwesomeIcon icon={faEnvelope} />}
            </li>
            <li>
              <b>Followers:</b> {followers} <FontAwesomeIcon icon={faUserGroup} />
            </li>
            <li>
              <b>Member since:</b> {ParseDate(created_at)} <FontAwesomeIcon icon={faCalendar} />
            </li>
          </ul>
        </div>
      </div>
      <Link to={`/users/${login}`}>
        <button
          className={detailsButton}
          onClick={() => {
            setCurrentUser(User);
          }}>
          See details
        </button>
      </Link>
    </div>
  );
};

export default UserCard;
