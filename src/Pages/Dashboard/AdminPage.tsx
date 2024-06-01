import React, { useState } from "react";
import classes from "./Admin.module.scss";
import styles from "../../DesignSystem/_classes.module.scss";
import StatsTile from "./StatsTile/StatsTile.tsx";
import Map from "../../Components/graphs/Map/Map.tsx";
import PolarAreaChart from "../../Components/graphs/PolarAreaChart/PolarAreaChart.tsx";
import TaskTile from "./TaskTile/TaskTile.tsx";
import TopPerformers from "../../Components/graphs/TopPerformers/TopPerformers.tsx";
import PieChart from "../../Components/graphs/PieChart/PieChart.tsx";
import OverviewTile from "./OverviewTile/OverviewTile.tsx";
import Button from "../../Components/Button/Button.tsx";
import BarChart from "../../Components/graphs/BarChart/BarChart.tsx";
import LineChart from "../../Components/graphs/LineGraph/LineGraph.tsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface statsTileProps {
  header?: string;
  growth: "increament" | "decrement" | "stagnant";
  value?: string;
  percentValue?: number;
}

const AdminPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  let statsTileArr: statsTileProps[] = [
    {
      header: "TOTAL REVENUE",
      growth: "increament",
      value: "$2189",
      percentValue: 10.21,
    },
    {
      header: "PRODUCT SOLD",
      growth: "decrement",
      value: "1065",
      percentValue: 5.05,
    },
    {
      header: "NEW CUSTOMERS",
      growth: "increament",
      value: "11",
      percentValue: 25.16,
    },
    {
      header: "TOTAL REVENUE",
      growth: "stagnant",
      value: "750",
      percentValue: 5.05,
    },
  ];

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = [30, 20, 50, 60, 70, 90, 100];
  const backgroundColor = [
    "rgba(75, 192, 192, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(201, 203, 207, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)",
  ];
  const borderColor = [
    "rgb(75, 192, 192)",
    "rgb(54, 162, 235)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
  ];
  const clickhandler = () => {
    alert("button clicked");
  };

  return (
    <div className={classes["admin-dashboard-container"]}>
      <div className={classes["admin-dashboard-header"]}>
        <div className={classes["admin-dashboard-heading"]}>Dashboard</div>
        <div className={classes["admin-dashboard-leftcontainer"]}>
          <div className={classes["admin-dashboard-daterange"]}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className={classes["datePicker"]}
            />
          </div>
          <div className={classes["admin-dashboard-downloadbutton"]}>
            <Button onClick={clickhandler} className={classes["custom-class"]}>
              Downloads
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`${classes["admin-dashboard-content"]} ${styles["grid-columns-4"]}`}
      >
        {statsTileArr.map((tile) => (
          <StatsTile
            header={tile.header}
            growth={tile.growth}
            value={tile.value}
            percentValue={tile.percentValue}
          />
        ))}
      </div>
      <div
        className={`${styles["grid-columns-4"]} ${classes["overview-revenue-target-container"]}`}
      >
        <div className={`${styles["column-span-1"]} ${styles["card"]}`}>
          <OverviewTile />
        </div>
        <div
          className={`${styles["column-span-2"]} ${styles["card"]} ${classes["revenue-chart-container"]}`}
        >
          <div
            className={`${classes["revenue-header-container"]} ${styles["chart-header"]}`}
          >
            Revenue
          </div>
          <LineChart height={"310px"} />
        </div>
        <div
          className={`${styles["column-span-1"]} ${styles["card"]} ${classes["monthly-sales-chart-container"]}`}
        >
          <div
            className={`${classes["targets-header-container"]} ${styles["chart-header"]}`}
          >
            Targets
          </div>
          <BarChart
            labels={labels}
            datasetLabel="Monthly Sales"
            data={data}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            height={"310px"}
          />
        </div>
      </div>
      <div
        className={`${styles["grid-columns-4"]} ${classes["polar-map-container-parent"]}`}
      >
        <div
          className={`${styles["card"]} ${styles["column-span-2"]} ${classes["polar-chart-text-container"]}`}
        >
          <div className={styles["chart-header"]}>Sales by category</div>
          <div className={classes["polar-chart-container"]}>
            <PolarAreaChart />
          </div>
        </div>
        <Map />
      </div>
      <div
        className={`${styles["grid-columns-3"]} ${classes["utilities-container"]}`}
      >
        <div className={`${styles["card"]} ${styles["column-span-1"]}`}>
          <TaskTile />
        </div>
        <div
          className={`${styles["card"]} ${styles["column-span-1"]} ${classes["traffic-sources-container"]}`}
        >
          <div className={styles["chart-header"]}>Traffic Sources</div>
          <TopPerformers />
        </div>
        <div
          className={`${styles["card"]} ${styles["column-span-1"]} ${classes["revenue-container"]}`}
        >
          <div className={styles["chart-header"]}>Total Revenue ($)</div>
          <div className={classes["piechart-container"]}>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
