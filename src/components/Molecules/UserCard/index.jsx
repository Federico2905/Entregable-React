//Importacion de estilos
import { container, InfoList, img } from "./UserCard.module.css";
//importacion de Octokit
import { Octokit } from "octokit";
//importaciones de hooks
import { useEffect, useState} from "react";
//importaciones de utils
import { ParseDate } from "../../../utils/ParseDate";

const UserCard = ({username}) => {
  const octokit = new Octokit();
  const [User,setUser]=useState({})
  const getUser = async () => {
    const response = await octokit.request("GET /users/{username}", {
      username: username,
    });
    const {avatar_url,login,email,followers,created_at}=response.data
    const User={
        avatar:avatar_url,
        name:login,
        email,
        followers,
        since:created_at,
    }
    setUser(User);
  };

  useEffect(() => {
   getUser();
  }, []);
  const {avatar,name,email,followers,since}=User
  return (
    <div className={container}>
      <img src={avatar} className={img} />
      <div>
        <ul className={InfoList}>
          <li>
            <b>Username:</b> {name}
          </li>
          <li>
            <b>Email:</b> {email}
          </li>
          <li> <b>Followers:</b> {followers}</li>
          <li><b>Member since:</b> {ParseDate(since)}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
