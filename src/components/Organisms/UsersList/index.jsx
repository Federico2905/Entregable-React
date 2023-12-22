//importacion de estilos
import { container, usersList } from "./UsersList.module.css";
//importacion de hooks
import { useContext, useEffect, useState } from "react";
//importacion de componentes
import ListUI from "../../Molecules/ListUI";
import UserCard from "../../Molecules/UserCard";
//importacion de un context
import { searchContext } from "../../../contexts/searchContext";

const UsersList = ({ Found }) => {
  const [IsCollapsed, setIsCollapsed] = useState(false);
  const { CurrentSearchGlobal } = useContext(searchContext);

  const saveData = async () => {
    if (CurrentSearchGlobal === "") {
      return;
    }
    if (Found[0] == "No users has been found") {
      return;
    }
    const SavedUsersResponse = await fetch(`http://localhost:5000/api/v1/searches/users/${CurrentSearchGlobal}`);
    if (SavedUsersResponse.statusText != "Not Found") {
      await fetch(`http://localhost:5000/api/v1/searches/${CurrentSearchGlobal}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm: CurrentSearchGlobal, type: "users", searchResult: Found }),
      });
      return;
    }
    await fetch("http://localhost:5000/api/v1/searches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchTerm: CurrentSearchGlobal, type: "users", searchResult: Found }),
    });
  };
  useEffect(() => {
    saveData();
  }, [Found]);
  return (
    <div className={container}>
      {Found.length != 0 && (
        <ListUI title="Users" IsCollapsed={IsCollapsed} setIsCollapsed={setIsCollapsed}>
          {Found[0] == "No users has been found" && <>{IsCollapsed === false && <p>{Found[0]}</p>}</>}
          {Found[0] != "No users has been found" && (
            <div className={usersList}>
              {Found.map((foundeduser) => {
                return <UserCard key={foundeduser.login} User={foundeduser} />;
              })}
            </div>
          )}
        </ListUI>
      )}
    </div>
  );
};
export default UsersList;
