import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Direct Sales", "Online Sales"],
    datasets: [
      {
        label: "$Millions",
        data: [30, 70],
        backgroundColor: ["rgba(54, 162, 235)", "rgba(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        position: "bottom",
        title: { display: true, padding: 5 }, // or whatever number
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
