//importacion de estilos
import { modalOverlay, container, modalStructure, confirmButton, cancelButton, buttons, title } from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ Data, CloseModal, IsOpen }) => {
  if (!IsOpen) {
    return null;
  }
  const { func, message } = Data;

  return (
    <div className={container}>
      <div className={modalOverlay} />
      <div className={modalStructure}>
        <h3 className={title}>Are you sure that you want to do this?</h3>
        <p>{message}</p>
        <div className={buttons}>
          <button
            onClick={() => {
              CloseModal();
            }}
            className={cancelButton}>
            Cancel
          </button>
          <button
            onClick={() => {
              func();
              CloseModal();
            }}
            className={confirmButton}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
