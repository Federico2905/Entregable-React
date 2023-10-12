//importaciones de hooks
import { useContext } from "react";
//importaciones de componentes
import UsersList from "../../components/Organisms/UsersList";
import ReposList from "../../components/Organisms/ReposList";
import SearchBar from "../../components/Molecules/SearchBar";
//importacion de un context
import { foundContext } from "../../contexts/foundContext";

const Home = () => {
  const { Found } = useContext(foundContext);
  return (
    <div className="structure">
      <h2> Search for a user or a repository you want to know about:</h2>
      <SearchBar />
      <div className="container">
        <UsersList Found={Found.Users} />
        <ReposList Found={Found.Repos} />
      </div>
    </div>
  );
};
export default Home;
