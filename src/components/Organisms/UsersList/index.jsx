//importacion de estilos
import { container, usersList } from "./UsersList.module.css";
//importaciones de hooks
import { useEffect, useState } from "react";
//importaciones de componentes
import ListUI from "../../Molecules/ListUI";
import UserCard from "../../Molecules/UserCard";

const UsersList = ({ Found }) => {
  const [IsCollapsed, setIsCollapsed] = useState(false);

  // useEffect(() => {
  //   console.log(Found);
  // }, [Found]);
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
                    return <UserCard key={foundeduser.username} {...foundeduser} />;
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
