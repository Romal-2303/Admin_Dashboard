import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface lineGraphProps {
  borderColor?: string;
  backgroundColor?: string;
}

const LineGraph = ({
  borderColor = "rgb(255, 99, 132)",
  backgroundColor = "rgba(255, 99, 132, 0.2)",
}: lineGraphProps) => {
  const labels = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 40, 25, 60, 30, 13, 23, 13, 25, 6, 64],
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        fill: true,
        tension: 0.3,
      },
    ],
  };
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

  return <Line options={options} data={data} />;
};

export default LineGraph;
