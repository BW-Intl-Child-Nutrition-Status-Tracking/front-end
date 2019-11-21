import React from "react";
import { Line } from "react-chartjs-2";

const weightData = {
  labels: [
    "Jan 2016",
    "Jul 2016",
    "Jan 2017",
    "Jul 2017",
    "Jan 2018",
    "Jul 2018",
    "Jan 2019",
    "Jul 2019"
  ],
  datasets: [
    {
      label: "Child Weight (KG)",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [22, 24, 27, 28, 29, 32, 31]
    }
  ]
};

function Chart (

    return (
      <div>
        <h2>Child Weight Tracking Over Time (KG)</h2>
        <Line data={weightData} />
      </div>
    );
);

export default Chart;
