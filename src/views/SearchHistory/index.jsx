//Importacion de hooks
import { useEffect, useState, useContext } from "react";
//Importacion de componentes
import HomeButton from "../../components/Atoms/HomeButton";
import SearchesList from "../../components/Organisms/SearchesList";
//importacion de utils
import { CompareDates } from "../../utils/SortArrByDate";
//importacion de contexts
import { historyContext } from "../../contexts/historyContext";
import { searchContext } from "../../contexts/searchContext";

const getSearchTerms = (array) => {
  return Array.from(new Set(array));
};

const SearchHistory = () => {
  const { setCurrentSearchGlobal } = useContext(searchContext);
  const { setHistory } = useContext(historyContext);
  const [searchTerms, setSearchTerms] = useState([]);

  const getSearches = async () => {
    const response = await fetch("http://localhost:5000/api/v1/searches");
    const data = await response.json();
    const history = data.result;
    if (!history) {
      return;
    }
    let arrSearchTerms = [];
    let arrSearches = [];
    const sortedHistory = history.sort(CompareDates);
    sortedHistory.map((search) => {
      arrSearchTerms.push(search.searchTerm);
      arrSearches.push(search);
    });
    setSearchTerms(arrSearchTerms);
    setHistory(arrSearches);
    setCurrentSearchGlobal("");
  };

  useEffect(() => {
    getSearches();
  }, []);

  return (
    <>
      <HomeButton />
      <SearchesList SearchTerms={getSearchTerms(searchTerms)} />
    </>
  );
};

export default SearchHistory;
