//importacion de estilos
import { container, InfoList } from "./RepoCard.module.css";
//importacion de Octokit
import { Octokit } from "octokit";
//importaciones de hooks
import { useEffect, useState } from "react";
//importaciones de utils
import { ParseDate } from "../../../utils/ParseDate";
//importaciones de fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCalendar } from "@fortawesome/free-solid-svg-icons";

const RepoCard = ({ repo, owner }) => {
  const [Repo, setRepo] = useState({ name: "", language: "", created: "", watchers: 0 });
  const octokit = new Octokit();
  const GetRepo = async () => {
    const response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: owner,
      repo: repo,
    });
    const data = response.data;
    const { name, language, created_at, watchers } = data;
    const Repo = {
      name,
      language,
      created: created_at,
      watchers,
    };
    setRepo(Repo);
  };
  useEffect(() => {
    GetRepo();
  }, []);
  const { name, language, created, watchers } = Repo;
  return (
    <div className={container}>
      <ul className={InfoList}>
        <li>
          <b>Repository name: </b>
          {name}
        </li>
        <li>
          <b>Language: </b>
          {language}
        </li>
        <li>
          <b>Created on: </b>
          {ParseDate(created)} <FontAwesomeIcon icon={faCalendar} />
        </li>
        <li>
          <b>Watchers: </b>
          {watchers} <FontAwesomeIcon icon={faEye} />
        </li>
      </ul>
    </div>
  );
};

export default RepoCard;
