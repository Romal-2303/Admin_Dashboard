import React from "react";
import classes from "./Admin.module.scss";
import styles from "../../DesignSystem/_classes.module.scss";
import StatsTile from "./StatsTile/StatsTile.tsx";
import Map from "../../Components/graphs/Map/Map.tsx";
import PolarAreaChart from "../../Components/graphs/PolarAreaChart/PolarAreaChart.tsx";
import TaskTile from "./TaskTile/TaskTile.tsx";
import TopPerformers from "../../Components/graphs/TopPerformers/TopPerformers.tsx";
import PieChart from "../../Components/graphs/PieChart/PieChart.tsx";
import OverviewTile from "./OverviewTile/OverviewTile.tsx";

interface statsTileProps {
  header?: string;
  growth: "increament" | "decrement" | "stagnant";
  value?: string;
  percentValue?: number;
}

const AdminPage = () => {
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

  return (
    <div className={classes["admin-dashboard-container"]}>
      <div className={classes["admin-dashboard-header"]}></div>
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
        <div className={`${styles["column-span-2"]} ${styles["card"]}`}>b</div>
        <div className={`${styles["column-span-1"]} ${styles["card"]}`}>c</div>
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
