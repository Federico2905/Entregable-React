//importacion de los estilos
import { container, searchesList, title } from "./SearchesList.module.css";
//importacion de hooks
import { useEffect } from "react";
//importacion de componentes
import SearchEntry from "../../Molecules/SearchEntry";

const SearchesList = ({ SearchTerms }) => {
  return (
    <div className={container}>
      <h1 className={title}> Search History:</h1>
      <div className={searchesList}>
        {SearchTerms.map((search) => {
          return <SearchEntry key={search} searchTerm={search} />;
        })}
      </div>
    </div>
  );
};

export default SearchesList;
