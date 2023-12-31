//importacion de estilos
import { container, structure } from "./Home.module.css";
//importacion de hooks
import { useContext } from "react";
//importacion de componentes
import UsersList from "../../components/Organisms/UsersList";
import ReposList from "../../components/Organisms/ReposList";
import SearchBar from "../../components/Molecules/SearchBar";
import SearchHistoryButton from "../../components/Atoms/SearchHistoryButton";
//importacion de un context
import { foundContext } from "../../contexts/foundContext";

const Home = () => {
  const { Found } = useContext(foundContext);
  return (
    <div className={structure}>
      <SearchHistoryButton />
      <h2> Search for a user or a repository you want to know about:</h2>
      <SearchBar />
      <div className={container}>
        <UsersList Found={Found.Users} />
        <ReposList Found={Found.Repos} />
      </div>
    </div>
  );
};
export default Home;
