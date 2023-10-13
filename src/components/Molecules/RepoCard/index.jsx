//importacion de estilos
import { container, InfoList, detailsButton, repoName, infoListSec } from "./RepoCard.module.css";
//importacion de Octokit
import { Octokit } from "octokit";
//importaciones de hooks
import { useEffect, useState } from "react";
//importaciones de utils
import { ParseDate } from "../../../utils/ParseDate";
//importaciones de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCalendar } from "@fortawesome/free-solid-svg-icons";
//importacion de un hook
import { useRepoModal } from "../../../hooks/useRepoModal";

const RepoCard = ({ repo, owner }) => {
  const [Repo, setRepo] = useState({ name: "", language: "", created_at: "", watchers: 0 });
  const { OpenModal, Modal } = useRepoModal();
  const octokit = new Octokit();
  const GetRepo = async () => {
    const response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: owner,
      repo: repo,
    });
    setRepo(response.data);
  };

  useEffect(() => {
    GetRepo();
  }, []);
  const { name, language, created_at, watchers } = Repo;
  return (
    <>
      <Modal />
      <div className={container}>
        <li className={repoName}>
          <b>Repository name: </b>
          {name}
        </li>
        <div className={infoListSec}>
          <ul className={InfoList}>
            <li>
              <b>Language: </b>
              {language}
            </li>
            <li>
              <b>Created on: </b>
              {ParseDate(created_at)} <FontAwesomeIcon icon={faCalendar} />
            </li>
            <li>
              <b>Watchers: </b>
              {watchers} <FontAwesomeIcon icon={faEye} />
            </li>
          </ul>
          <button
            className={detailsButton}
            onClick={() => {
              OpenModal(Repo);
            }}>
            See details
          </button>
        </div>
      </div>
    </>
  );
};

export default RepoCard;
