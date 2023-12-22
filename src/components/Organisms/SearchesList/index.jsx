//importacion de estilos
import { container, searchesList, title, deleteAllButton, topSec } from "./SearchesList.module.css";
//importacion de hooks
import { useConfirmationModal } from "../../../hooks/useConfirmationModal";
//importacion de componentes
import SearchEntry from "../../Molecules/SearchEntry";

const SearchesList = ({ SearchTerms }) => {
  const { Modal, OpenModal } = useConfirmationModal();

  const deleteAllSearches = async () => {
    await fetch("http://localhost:5000/api/v1/allsearches", {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <>
      <Modal />
      <div className={container}>
        <div className={topSec}>
          <h1 className={title}> Search History:</h1>
          <button
            className={deleteAllButton}
            onClick={() => {
              OpenModal({ func: deleteAllSearches, message: "Delete your entire search history" });
            }}>
            Delete History
          </button>
        </div>
        {SearchTerms.lenght != 0 && (
          <div className={searchesList}>
            {SearchTerms.map((search) => {
              return <SearchEntry key={search} searchTerm={search} />;
            })}
          </div>
        )}
        {SearchTerms.length == 0 && <p> Your search history is currently empty</p>}
      </div>
    </>
  );
};

export default SearchesList;
