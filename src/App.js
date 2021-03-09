import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/team/:teamId">
            <TeamDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
