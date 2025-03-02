import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PlayerProfile() {
  const { name } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/player/" + name)
      .then(response => setPlayer(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, [name]);

  return (
    <div className="player-profile">
      {player ? (
        <>
          <h2>{player.name}</h2>
          <p><strong>Strokes Gained:</strong> {player.strokes_gained}</p>
          <p><strong>Driving Distance:</strong> {player.driving_distance} yds</p>
          <p><strong>Putting Average:</strong> {player.putting_avg}</p>
        </>
      ) : <p>Loading player data...</p>}
    </div>
  );
}

export default PlayerProfile;