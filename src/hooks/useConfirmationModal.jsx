//importacion de hooks
import { useState } from "react";
//importacion de componentes
import ConfirmationModal from "../components/Molecules/ConfirmationModal";
//importaciones de React-Dom
import { createPortal } from "react-dom";

export const useConfirmationModal = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [Data, setData] = useState({});

  const OpenModal = (Data) => {
    setData(Data);
    setIsOpen(true);
  };

  const CloseModal = () => {
    setIsOpen(false);
  };

  const Modal = () => {
    return createPortal(<ConfirmationModal IsOpen={IsOpen} CloseModal={CloseModal} Data={Data} />, document.getElementById("root-modal"));
  };

  return { OpenModal, CloseModal, Modal };
};
