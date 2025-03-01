import React from "react";
import { useParams } from "react-router-dom";

const PlayerProfile = () => {
  const { name } = useParams();
  return (
    <div>
      <h2>Player Profile: {name}</h2>
      <p>This is the profile page for {name}.</p>
    </div>
  );
};

export default PlayerProfile;