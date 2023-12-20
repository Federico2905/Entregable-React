//Importaciones de hooks
import { useEffect, useState, useContext } from "react";
//Importaciones de componentes
import HomeButton from "../../components/Atoms/HomeButton";
import SearchesList from "../../components/Organisms/SearchesList";
//importacion de un context
import { historyContext } from "../../contexts/historyContext";
import { CompareDates } from "../../utils/SortArrByDate";

const getSearchTerms = (array) => {
  return Array.from(new Set(array));
};

const SearchHistory = () => {
  const { setHistory } = useContext(historyContext);
  const [searchTerms, setSearchTerms] = useState([]);
  const getSearches = async () => {
    const response = await fetch("http://localhost:5000/api/v1/searches");
    const data = await response.json();
    const history = data.result;
    let arrSearchTerms = [];
    let arrSearches = [];
    const sortedHistory = history.sort(CompareDates);
    // console.log("sorted:", sortedHistory);
    sortedHistory.map((search) => {
      arrSearchTerms.push(search.searchTerm);
      arrSearches.push(search);
    });
    // console.log("Searchterms", getSearchTerms(arrSearchTerms));
    // console.log("arrSearchTerms:", arrSearchTerms);s
    // console.log("arrSearches", arrSearches);
    setSearchTerms(arrSearchTerms);
    setHistory(arrSearches);
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
