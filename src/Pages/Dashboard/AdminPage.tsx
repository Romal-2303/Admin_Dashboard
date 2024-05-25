import React from "react";
import classes from "./Admin.module.scss";
import styles from "../../DesignSystem/_classes.module.scss";
import StatsTile from "./StatsTile/StatsTile.tsx";

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
    </div>
  );
};

export default AdminPage;
