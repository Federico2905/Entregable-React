//importacion de estilos
import { list } from "./SearchEntry.module.css";
//importacion de componentes
import ListUI from "../ListUI";
import UserCard from "../UserCard";
import RepoCard from "../RepoCard";
//importacion de hooks
import { useContext, useEffect, useState } from "react";
//importacion de un context
import { historyContext } from "../../../contexts/historyContext";

const SearchEntry = ({ searchTerm }) => {
  const [IsCollapsed, setIsCollapsed] = useState(true);
  const [Users, setUsers] = useState([]);
  const [Repos, setRepos] = useState([]);
  const { History } = useContext(historyContext);

  const getData = () => {
    const SearchData = History.filter((Search) => {
      return Search.searchTerm == searchTerm;
    });
    console.log("SearchData", SearchData);
    const UsersSearch = SearchData.find((Search) => {
      return Search.type == "users";
    });
    console.log("UsersSearch:", UsersSearch);
    if (UsersSearch) {
      setUsers(UsersSearch);
    }

    const ReposSearch = SearchData.find((Search) => {
      return Search.type == "repos";
    });
    console.log("ReposSearch:", ReposSearch);
    if (ReposSearch) {
      setRepos(ReposSearch);
    }
  };

  useEffect(() => {
    getData();
    // console.log("searchterm:", searchTerm);
    // console.log("History", History);
  }, [searchTerm]);
  return (
    <>
      <ListUI date={Repos.searchDate} title={searchTerm} IsCollapsed={IsCollapsed} setIsCollapsed={setIsCollapsed}>
        <div>
          {IsCollapsed == false && (
            <>
              <h2>Users:</h2>
              {Users.length == 0 && <p> No users were found</p>}
              {Users.length != 0 && (
                <div className={list}>
                  {Users.searchResult.map((result) => {
                    return <UserCard key={result.login} User={result} />;
                  })}
                </div>
              )}

              <h2>Repos:</h2>
              {Repos.length == 0 && <p> No repos were found</p>}
              {Repos.length != 0 && (
                <div className={list}>
                  {Repos.searchResult.map((result) => {
                    return <RepoCard key={result.name} Repo={result} />;
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </ListUI>
    </>
  );
};

export default SearchEntry;
