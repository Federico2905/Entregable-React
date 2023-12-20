// importacion de estilos
import "./App.css";
// importacion de las views
import Home from "./views/Home";
import UserDetails from "./views/UserDetails";
import SearchHistory from "./views/SearchHistory";
// importacion del router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users/:username">
          <UserDetails />
        </Route>
        <Route exact path="/searches">
          <SearchHistory />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
