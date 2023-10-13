//importaciones de hooks
import { useState } from "react";
//importaciones de React-Dom
import { createPortal } from "react-dom";
//importaciones de componentes
import RepoModal from "../components/Molecules/RepoModal";

export const useRepoModal = () => {
  const [IsOpen, SetIsOpen] = useState(false);
  const [Repo, SetRepo] = useState();

  const OpenModal = (repo) => {
    SetRepo(repo);
    SetIsOpen(true);
  };
  const CloseModal = () => {
    SetIsOpen(false);
  };
  const Modal = () => {
    return createPortal(
      <RepoModal isOpen={IsOpen} CloseModal={CloseModal} Repo={Repo} />,
      document.getElementById("root-modal")
    );
  };
  return { OpenModal, CloseModal, Modal };
};
