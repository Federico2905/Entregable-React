//importacion de estilos
import {
  container,
  modalOverlay,
  body,
  infoList,
  title,
  bodySec,
  descriptionContainer,
  input,
  subtitle,
  note,
  cloning,
  closeButton,
} from "./RepoModal.module.css";
//importacion de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCalendar, faCodeFork, faStar, faIdCard, faXmark } from "@fortawesome/free-solid-svg-icons";
//importacion de utils
import { ParseDate } from "../../../utils/ParseDate";

const RepoModal = ({ isOpen, Repo, CloseModal }) => {
  if (!isOpen) {
    return null;
  }
  let { clone_url, created_at, description, forks_count, full_name, id, language, license, name, owner, stargazers_count, watchers } = Repo;
  const { login } = owner;
  if (!description) {
    description = "This repository has no description";
  }
  if (!license) {
    license = { name: "This repository does not have a license" };
  }
  if (!language) {
    language = "This repository does not show it's languages";
  }
  const CloneText = `git clone ${clone_url}`;
  return (
    <div className={container}>
      <div onClick={() => CloseModal()} className={modalOverlay} />
      <div className={body}>
        <div
          className={closeButton}
          onClick={() => {
            CloseModal();
          }}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <h1 className={title}>{name}</h1>
        <div className={bodySec}>
          <ul className={infoList}>
            <li>
              <b>Repository full name:</b> {full_name}
            </li>
            <li>
              <b>Owner:</b> {login} <FontAwesomeIcon icon={faIdCard} />
            </li>
            <li>
              <b>Created at:</b> {ParseDate(created_at)} <FontAwesomeIcon icon={faCalendar} />
            </li>
            <li>
              <b>Forks:</b> {forks_count} <FontAwesomeIcon icon={faCodeFork} />
            </li>
            <li>
              <b>Repository ID:</b> {id}
            </li>
            <li>
              <b>Main language:</b> {language}
            </li>
            <li>
              <b>Stars:</b> {stargazers_count} <FontAwesomeIcon icon={faStar} />
            </li>
            <li>
              <b>Watchers:</b> {watchers} <FontAwesomeIcon icon={faEye} />
            </li>
            <li>
              <b>License:</b> {license.name}
            </li>
          </ul>
          <div className={descriptionContainer}>
            <p>
              <b>Description:</b> {description}
            </p>
          </div>
        </div>
        <div>
          <h2 className={subtitle}>Cloning this repository:</h2>
          <h4 className={cloning}>To clone this repository copy and paste the following command on cmd or any other console:</h4>
          <input className={input} defaultValue={CloneText} readOnly />
          <h6 className={note}>
            Note: It's recommended that you clone repositories inside a folder so it's more organized and so you avoid matching file names conflicts
            and other errors
          </h6>
        </div>
      </div>
    </div>
  );
};

export default RepoModal;
