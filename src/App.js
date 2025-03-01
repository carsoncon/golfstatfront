import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import PlayerProfile from "./components/PlayerProfile";
import Trends from "./components/Trends";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>PGA Stats Dashboard</h1>
        <Switch>
          <Route path="/" exact component={Leaderboard} />
          <Route path="/player/:name" component={PlayerProfile} />
          <Route path="/trends" component={Trends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;