//importacion de estilos
import { list, container } from "./SearchEntry.module.css";
//importacion de hooks
import { useContext, useEffect, useState } from "react";
//importacion de componentes
import ListUI from "../ListUI";
import UserCard from "../UserCard";
import RepoCard from "../RepoCard";
import HistoryDeleteButton from "../../Atoms/HistoryDeleteButton";
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
    const UsersSearch = SearchData.find((Search) => {
      return Search.type == "users";
    });
    if (UsersSearch) {
      setUsers(UsersSearch);
    }

    const ReposSearch = SearchData.find((Search) => {
      return Search.type == "repos";
    });
    if (ReposSearch) {
      setRepos(ReposSearch);
    }
  };

  const deleteFunction = async () => {
    await fetch(`http://localhost:5000/api/v1/searches/${searchTerm}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);
  return (
    <div className={container}>
      <HistoryDeleteButton ModalData={{ func: deleteFunction, message: `Delete ${searchTerm} and it's results from your search history` }} />
      <ListUI date={Repos.searchDate} title={searchTerm} IsCollapsed={IsCollapsed} setIsCollapsed={setIsCollapsed}>
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
      </ListUI>
    </div>
  );
};

export default SearchEntry;
