import React from "react";
import classes from "./StatsTile.module.scss";
import styles from "../../../DesignSystem/_classes.module.scss";
import { ReactComponent as IncrementIcon } from "../../../assets/icons/increament.svg";
import { ReactComponent as DecrementIcon } from "../../../assets/icons/decrement.svg";
import LineGraph from "../../../Components/graphs/LineChart/LineChart.tsx";

interface statsTileProps {
  header?: string;
  growth: "increament" | "decrement" | "stagnant";
  value?: string;
  percentValue?: number;
}

const StatsTile = ({
  header = "Total Revenue",
  growth = "increament",
  value = "value",
  percentValue = 0.0,
}: statsTileProps) => {
  return (
    <div className={`${classes["stats-tile-container"]} ${styles["card"]}`}>
      <div className={classes["section-1"]}>
        <p className={classes["stats-tile-header"]}>{header}</p>
        <p className={classes["stats-tile-value"]}>{value}</p>
      </div>
      <div className={classes["section-2"]}>
        <div className={classes["stats-tile-graph-container"]}>
          {growth === "increament" ? (
            <LineGraph
              borderColor={"#79AC2E"}
              backgroundColor="rgba(121, 172, 46, 0.2)"
            />
          ) : growth === "decrement" ? (
            <LineGraph
              borderColor={"rgb(255, 99, 132)"}
              backgroundColor="rgba(255, 99, 132, 0.2)"
            />
          ) : (
            <LineGraph borderColor={"rgb(255, 99, 132)"} />
          )}
        </div>
        <div className={classes["stats-tile-percentage"]}>
          <p className={classes["stats-tile-percentage-icon"]}>
            {growth === "increament" ? (
              <IncrementIcon />
            ) : growth === "decrement" ? (
              <DecrementIcon />
            ) : (
              <DecrementIcon />
            )}
          </p>
          <p
            className={
              growth === "increament"
                ? classes["stats-tile-percentage-value-increment"]
                : classes["stats-tile-percentage-value-decrement"]
            }
          >
            {percentValue}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsTile;
