//importacion de estilos
import { container, InfoList, detailsButton, repoName, infoListSec } from "./RepoCard.module.css";
//importaciones de hooks
import { useEffect } from "react";
//importaciones de utils
import { ParseDate } from "../../../utils/ParseDate";
//importaciones de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCalendar } from "@fortawesome/free-solid-svg-icons";
//importacion de un hook
import { useRepoModal } from "../../../hooks/useRepoModal";

const RepoCard = ({ Repo }) => {
  const { OpenModal, Modal } = useRepoModal();

  // useEffect(() => {
  //   console.log("Repo:", Repo);
  // }, []);
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
