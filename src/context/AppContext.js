import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  return (
    <AppContext.Provider value={{ leaderboardData, setLeaderboardData }}>
      {children}
    </AppContext.Provider>
  );
};