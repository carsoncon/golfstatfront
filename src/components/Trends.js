import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

function Trends() {
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/trends")
      .then(response => setTrendData(response.data))
      .catch(error => console.error("Error fetching trends:", error));
  }, []);

  const data = {
    labels: trendData.map(stat => stat.tournament),
    datasets: [
      {
        label: "Strokes Gained",
        data: trendData.map(stat => stat.strokes_gained),
        borderColor: "rgba(0, 255, 0, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="trends">
      <h2>Performance Trends</h2>
      <Line data={data} />
    </div>
  );
}

export default Trends;