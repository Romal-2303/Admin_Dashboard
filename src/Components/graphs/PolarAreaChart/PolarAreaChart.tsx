import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {
  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      r: {
        grid: {
          color: "white",
        },
        ticks: {
          color: "black",
          backgroundColor: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  const data = {
    labels: [
      "Electronics",
      "Clothes",
      "Dairy Products",
      "Services",
      "Equipments",
      "Bakery",
    ],
    datasets: [
      {
        label: "$Million",
        data: [4, 17, 9, 13, 19, 1],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderWidth: 2,
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarAreaChart;
