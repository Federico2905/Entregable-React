//importacion de estilos
import { button } from "./HistoryDeleteButton.module.css";
//importaciones de hooks
import { useConfirmationModal } from "../../../hooks/useConfirmationModal";
//importacion de iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const HistoryDeleteButton = ({ ModalData }) => {
  const { Modal, OpenModal } = useConfirmationModal();

  return (
    <>
      <Modal />
      <button
        onClick={() => {
          OpenModal(ModalData);
        }}
        className={button}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
};

export default HistoryDeleteButton;
