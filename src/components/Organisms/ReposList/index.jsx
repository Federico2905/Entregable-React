//importacion de estilos
import { container, reposList } from "./ReposList.module.css";
//importaciones de hooks
import { useContext, useEffect, useState } from "react";
//importaciones de componentes
import RepoCard from "../../Molecules/RepoCard";
import ListUI from "../../Molecules/ListUI";
//importacion de un context
import { searchContext } from "../../../contexts/searchContext";

const ReposList = ({ Found }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { CurrentSearch } = useContext(searchContext);

  const saveData = async () => {
    if (CurrentSearch === "") {
      return;
    }
    const SavedReposResponse = await fetch(`http://localhost:5000/api/v1/searches/repos/${CurrentSearch}`);
    if (SavedReposResponse.statusText != "Not Found") {
      console.log("The repos were saved");
      return;
    }
    const response = await fetch("http://localhost:5000/api/v1/searches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchTerm: CurrentSearch, type: "repos", searchResult: Found }),
    });
    console.log("ReposSaved:", await response.json());
  };

  useEffect(() => {
    saveData();
    // console.log(Found);
  }, [Found]);
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
                    return <RepoCard key={repo.name} Repo={repo} />;
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
