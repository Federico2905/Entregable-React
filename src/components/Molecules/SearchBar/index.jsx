//importacion de estilos
import { input, container, error, errorText } from "./SearchBar.module.css";
//importacion de hooks
import { useContext, useState } from "react";
//importacion de Octokit
import { Octokit } from "octokit";
//importacion de contexts
import { foundContext } from "../../../contexts/foundContext";
import { searchContext } from "../../../contexts/searchContext";

const SearchBar = () => {
  const { setCurrentSearchGlobal } = useContext(searchContext);
  const [CurrentSearchLocal, setCurrentSearchLocal] = useState("");
  const [Error, SetError] = useState(false);
  const { SetFound } = useContext(foundContext);
  const octokit = new Octokit({});

  const APISearch = async (Search) => {
    if (!Search) {
      SetError(true);
      return;
    }

    //Parte de la busqueda de usuarios
    let arrUsersFound = [];
    const SavedUsersResponse = await fetch(`http://localhost:5000/api/v1/searches/users/${Search}`);
    if (SavedUsersResponse.statusText != "Not Found") {
      const SavedUsersData = await SavedUsersResponse.json();
      const SavedUsers = SavedUsersData.result.searchResult;
      arrUsersFound = SavedUsers;
    } else {
      const UserResponse = await octokit.request("GET /search/users?q={q}{&per_page}", {
        q: `${Search} in:login`,
        per_page: 5,
      });
      const UserData = Object.values(UserResponse.data.items);
      const UserPromises = UserData.map(async (user) => {
        const { login } = user;
        const response = await octokit.request("GET /users/{username}", {
          username: login,
        });
        const data = response.data;
        arrUsersFound.push(data);
      });
      await Promise.all(UserPromises);
      if (arrUsersFound.length == 0) {
        arrUsersFound.push("No users has been found");
      }
    }

    // Parte de la busqueda de repositorios
    let arrReposFound = [];
    const SavedReposResponse = await fetch(`http://localhost:5000/api/v1/searches/repos/${Search}`);
    if (SavedReposResponse.statusText != "Not Found") {
      const SavedReposData = await SavedReposResponse.json();
      const SavedRepos = SavedReposData.result.searchResult;
      arrReposFound = SavedRepos;
    } else {
      const ReposResponse = await octokit.request("GET /search/repositories?q={q}{&per_page}", {
        q: `${Search} in:name`,
        per_page: 5,
      });
      const ReposData = Object.values(ReposResponse.data.items);
      const RepoPromises = ReposData.map(async ({ owner, name }) => {
        const response = await octokit.request("GET /repos/{owner}/{repo}", {
          owner: owner.login,
          repo: name,
        });
        const data = response.data;
        arrReposFound.push(data);
      });
      await Promise.all(RepoPromises);
      if (arrReposFound.length == 0) {
        arrReposFound.push("No repos has been found");
      }
    }
    setCurrentSearchGlobal(Search);
    SetFound({ Users: arrUsersFound, Repos: arrReposFound });
    SetError(false);

    const limit = await octokit.request("GET /rate_limit");
    console.log("Limit:", limit);
  };

  return (
    <>
      <div className={container}>
        <input
          className={`${input} ${Error ? error : ""}`}
          type="text"
          value={CurrentSearchLocal}
          onChange={(e) => {
            setCurrentSearchLocal(e.target.value);
          }}
        />

        <button
          onClick={() => {
            APISearch(CurrentSearchLocal);
          }}>
          Search
        </button>
      </div>
      {Error == true && <p className={errorText}>You must write something to search!</p>}
    </>
  );
};

export default SearchBar;
