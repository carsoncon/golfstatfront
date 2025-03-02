import React from "react";
import { Link } from "react-router-dom";
import "./Leaderboard.css"; // Importing the new styles

const Leaderboard = () => {
  const players = [
    { name: "Tiger Woods", score: 65, country: "🇺🇸" },
    { name: "Rory McIlroy", score: 67, country: "🇮🇪" },
    { name: "Jon Rahm", score: 66, country: "🇪🇸" },
    { name: "Scottie Scheffler", score: 68, country: "🇺🇸" },
    { name: "Collin Morikawa", score: 69, country: "🇺🇸" },
  ];

  return (
    <div className="leaderboard-container">
      <h2>🏆 PGA Tour Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Score</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Link to={\`/player/${player.name.toLowerCase().replace(" ", "-")}\`}>
                  {player.name}
                </Link>
              </td>
              <td>{player.score}</td>
              <td>{player.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
