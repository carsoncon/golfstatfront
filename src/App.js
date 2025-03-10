import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import PlayerProfile from "./components/PlayerProfile"; // FIXED
import Trends from "./components/Trends"; // FIXED
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>PGA Stats Dashboard</h1>
        <Routes>
          <Route path="/" element={<Leaderboard />} />
          <Route path="/player/:name" element={<PlayerProfile />} />
          <Route path="/trends" element={<Trends />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
