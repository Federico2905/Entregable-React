//importaciones de estilos
import { container, containerSecLeft, infoList, title, reposList, img } from "./UserDetails.module.css";
//importaciones de hooks
import { useContext, useEffect, useState } from "react";
//importaciones de utils
import { ParseDate } from "../../utils/ParseDate";
//importacion de Octokit
import { Octokit } from "octokit";
//importaciones de componentes
import HomeButton from "../../components/Atoms/HomeButton";
import UserDetailsRepoCard from "../../components/Molecules/UserDetailsRepoCard";
//importacion de un context
import { userContext } from "../../contexts/userContext";
import SearchHistoryButton from "../../components/Atoms/SearchHistoryButton";

const UserDetails = () => {
  const { CurrentUser } = useContext(userContext);
  const [Repos, SetRepos] = useState([]);
  const octokit = new Octokit();
  let { avatar_url, company, created_at, email, followers, location, login, name, public_gists, public_repos, repos_url } = CurrentUser;
  const GetRepos = async () => {
    const response = await octokit.request(`GET ${repos_url}{?per_page}`, {
      per_page: 10,
    });
    // console.log(response.data);
    SetRepos(response.data);
    const limit = await octokit.request("GET /rate_limit");
    console.log(limit);
  };
  useEffect(() => {
    // console.log(CurrentUser);
    GetRepos();
  }, []);

  if (!email) {
    email = "No email registered";
  }
  if (!company) {
    company = "No company registered";
  }
  if (!location) {
    location = "No location registered";
  }
  if (!name) {
    name = login;
  }
  if (!public_repos) {
    public_repos = "This user has no public repositories";
  }
  if (!public_gists) {
    public_gists = "This user has no public gists";
  }
  return (
    <>
      <SearchHistoryButton />
      <HomeButton />
      <div className={container}>
        <div className={containerSecLeft}>
          <img src={avatar_url} className={img} />

          <ul className={infoList}>
            <li>
              <b>Name:</b> {name}
            </li>
            <li>
              <b>Email:</b> {email}
            </li>
            <li>
              <b>From:</b> {location}
            </li>
            <li>
              <b>Working at:</b> {company}
            </li>
            <li>
              <b>Followers:</b> {followers}
            </li>
            <li>
              <b>Member since:</b> {ParseDate(created_at)}
            </li>
            <li>
              <b>Public Repos:</b> {public_repos}
            </li>
            <li>
              <b>Public Gists:</b> {public_gists}
            </li>
          </ul>
        </div>
        <div>
          <h2 className={title}>Public Repositories:</h2>
          <div className={reposList}>
            {Repos.map((Repo) => {
              return <UserDetailsRepoCard key={Repo.id} Repo={Repo} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
