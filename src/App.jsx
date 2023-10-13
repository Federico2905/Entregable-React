// importacion de estilos
import "./App.css";
// importacion de las views
import Home from "./views/Home";
// importacion del router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetails from "./views/UserDetails";

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
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
