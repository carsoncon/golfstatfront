import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with your API base URL

export const fetchLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/leaderboard`);
    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};

export const fetchPlayerProfile = async (playerName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/player/${playerName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching player profile:", error);
    throw error;
  }
};