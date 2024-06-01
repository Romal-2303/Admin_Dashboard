import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

interface MyChartProps {
  labels?: string[];
  datasetLabel?: string;
  data?: number[];
  backgroundColor?: string[];
  borderColor?: string[];
  height?: string;
  width?: string;
}

const BarChart: React.FC<MyChartProps> = ({
  labels = ["January", "February", "March", "April", "May", "June", "July"],
  datasetLabel = "My First Dataset",
  data = [65, 59, 80, 81, 56, 55, 40],
  backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(201, 203, 207, 0.2)",
  ],
  borderColor = [
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(54, 162, 235)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)",
  ],
  height,
  width,
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: datasetLabel,
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} height={height} />
    </div>
  );
};

export default BarChart;
