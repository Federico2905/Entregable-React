//importacion de los estilos
import { container, repoList, repoName, repoListSec, detailsButton } from "./UserDetailsRepoCard.module.css";
//importacion de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeFork, faEye } from "@fortawesome/free-solid-svg-icons";
//importacion de un hook
import { useRepoModal } from "../../../hooks/useRepoModal";

const UserDetailsRepoCard = ({ Repo }) => {
  const { language, name, watchers, forks_count, stargazers_count } = Repo;
  const { OpenModal, Modal } = useRepoModal();
  return (
    <div className={container}>
      <Modal />
      <li className={repoName}>
        <b>Repository name:</b> {name}
      </li>
      <div className={repoListSec}>
        <ul className={repoList}>
          <li>
            <b>Language:</b> {language}
          </li>
          <li>
            <b>Watchers:</b> {watchers} <FontAwesomeIcon icon={faEye} />
          </li>
          <li>
            <b>Stars:</b> {stargazers_count} <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <b>Forks:</b> {forks_count} <FontAwesomeIcon icon={faCodeFork} />
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
  );
};
export default UserDetailsRepoCard;
