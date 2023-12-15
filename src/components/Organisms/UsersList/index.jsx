//importacion de estilos
import { container, usersList } from "./UsersList.module.css";
//importaciones de hooks
import { useContext, useEffect, useState } from "react";
//importaciones de componentes
import ListUI from "../../Molecules/ListUI";
import UserCard from "../../Molecules/UserCard";
//importacion de un context
import { searchContext } from "../../../contexts/searchContext";

const UsersList = ({ Found }) => {
  const [IsCollapsed, setIsCollapsed] = useState(false);
  const { CurrentSearch } = useContext(searchContext);

  const saveData = async () => {
    if (CurrentSearch === "") {
      return;
    }
    const SavedUsersResponse = await fetch(`http://localhost:5000/api/v1/searches/users/${CurrentSearch}`);
    if (SavedUsersResponse.statusText != "Not Found") {
      console.log("The users were saved");
      return;
    }
    const response = await fetch("http://localhost:5000/api/v1/searches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchTerm: CurrentSearch, type: "users", searchResult: Found }),
    });

    console.log("UsersSaved:", await response.json());
  };
  useEffect(() => {
    saveData();
    // console.log("UsersFound:", Found);
  }, [Found]);
  return (
    <div className={container}>
      {Found.length != 0 && (
        <>
          <ListUI title="Users" IsCollapsed={IsCollapsed} setIsCollapsed={setIsCollapsed} />
          {Found[0] == "No users has been found" && <>{IsCollapsed === false && <p>{Found[0]}</p>}</>}
          {Found[0] != "No users has been found" && (
            <>
              {IsCollapsed === false && (
                <div className={usersList}>
                  {Found.map((foundeduser) => {
                    return <UserCard key={foundeduser.login} User={foundeduser} />;
                  })}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
export default UsersList;
