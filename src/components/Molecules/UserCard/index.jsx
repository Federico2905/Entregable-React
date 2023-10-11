//Importacion de estilos
import { container, containerSec, infoList, img, detailsButton } from "./UserCard.module.css";
//importacion de Octokit
import { Octokit } from "octokit";
//importaciones de hooks
import { useContext, useEffect, useState } from "react";
//importaciones de utils
import { ParseDate } from "../../../utils/ParseDate";
//Importaciones del Router
import { Link } from "react-router-dom";
//importacion de un context
import { userContext } from "../../../contexts/userContext";

const UserCard = ({ username }) => {
  const { setCurrentUser } = useContext(userContext);
  const octokit = new Octokit();
  const [User, setUser] = useState({});
  const getUser = async () => {
    const response = await octokit.request("GET /users/{username}", {
      username: username,
    });
    const User= response.data
    // const { avatar_url, login, email, followers, created_at } = response.data;
    // const User = {
    //   avatar: avatar_url,
    //   name: login,
    //   email,
    //   followers,
    //   since: created_at,
    // };
    setUser(User);
  };

  let { avatar_url, login, email, followers, created_at } = User

  useEffect(() => {
    getUser();
  }, []);
  if (!email){
    email="No registred email"
  }
  return (
    <div className={container}>
      <div className={containerSec}>
        <img src={avatar_url} className={img} />
        <div>
          <ul className={infoList}>
            <li>
              <b>Username:</b> {login}
            </li>
            <li>
              <b>Email:</b> {email}
            </li>
            <li>
              <b>Followers:</b> {followers}
            </li>
            <li>
              <b>Member since:</b> {ParseDate(created_at)}
            </li>
          </ul>
        </div>
      </div>
      <Link to={`/users/${login}`}>
        <button className={detailsButton}
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
