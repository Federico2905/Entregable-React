//importacion de estilos
import { container, reposList } from "./ReposList.module.css";
//importaciones de hooks
import { useEffect, useState } from "react";
//importaciones de componentes
import RepoCard from "../../Molecules/RepoCard";
import ListUI from "../../Molecules/ListUI";

const ReposList = ({ Found }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // useEffect(() => {
  //   console.log(Found);
  // }, [Found]);
  return (
    <div className={container}>
      {Found.length != 0 && (
        <>
          <ListUI title="Repositories" IsCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          {Found[0] == "No repos has been found" && <>{isCollapsed == false && <p>{Found[0]}</p>}</>}
          {Found[0] != "No repos has been found" && (
            <>
              {isCollapsed == false && (
                <div className={reposList}>
                  {Found.map((repo) => {
                    return <RepoCard key={repo.repo}{...repo} />;
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
export default ReposList;
