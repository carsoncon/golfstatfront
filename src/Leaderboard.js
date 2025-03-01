import React, { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/players")
      .then(response => setPlayers(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - Strokes Gained: {player.strokes_gained}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;