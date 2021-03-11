import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leagues from './Components/Leagues/Leagues';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
      <Leagues/>
      </Route>
      <Route path="/league/:idLeague">
        <LeagueDetail/>
      </Route>

      </Switch>
      
    </Router>
  );
}

export default App;
