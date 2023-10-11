//importaciones de estilos
import { input, container } from "./SearchBar.module.css";
//importacion de Octokit
import { Octokit } from "octokit";
//importaciones de hooks
import { useContext, useState } from "react";
//importacion de un context
import { foundContext } from "../../../contexts/foundContext";

const SearchBar = () => {
  const [Search, SetSearch] = useState("");
  const { SetFound } = useContext(foundContext);
  const octokit = new Octokit({});

  const APISearch = async (Search) => {
    // //Parte de la busqueda de usuarios
    const UserResponse = await octokit.request("GET /search/users?q={q}{&per_page}", {
      q: `${Search} in:login`,
      per_page: 1,
    });
    // console.log(Object.values(UserResponse.data.items));
    const UserData = Object.values(UserResponse.data.items);
    let arrUsersFound = [];
    UserData.map((user) => {
      const { login } = user;
      const foundedUser = {
        username: login,
      };
      arrUsersFound.push(foundedUser);
    });
    if (arrUsersFound.length == 0) {
      arrUsersFound.push("No users has been found");
    }

    // // Parte de la busqueda de repositorios
    // const ReposResponse = await octokit.request("GET /search/repositories?q={q}{&per_page}", {
    //   q: `${Search} in:name`,
    //   per_page: 1,
    // });
    // const ReposData = Object.values(ReposResponse.data.items);
    let arrReposFound = [];
    // ReposData.map((repo) => {
    //   const { name, owner } = repo;
    //   const foundedRepo = {
    //     repo: name,
    //     owner: owner.login,
    //   };
    //   arrReposFound.push(foundedRepo);
    // });
    // if (arrReposFound.length == 0) {
    //   arrReposFound.push("No repos has been found");
    // }
    SetFound({ Users: arrUsersFound, Repos: arrReposFound });
    const limit = await octokit.request("GET /rate_limit");
    console.log(limit);
  };

  // useEffect(() => {
  //   console.log(Search);
  //   console.log(Found);
  // }, [Search]);

  return (
    <div className={container}>
      <input
        className={input}
        type="text"
        value={Search}
        onChange={(e) => {
          SetSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          APISearch(Search);
        }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
