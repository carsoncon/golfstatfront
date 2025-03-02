import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>PGA Stats Dashboard</h1>
      <div className="nav-links">
        <Link to="/">Leaderboard</Link>
        <Link to="/trends">Trends</Link>
      </div>
    </nav>
  );
}

export default Navbar;