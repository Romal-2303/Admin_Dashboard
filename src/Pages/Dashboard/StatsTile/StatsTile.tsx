import React from "react";
import classes from "./StatsTile.module.scss";

interface statsTileProps {
  header?: string;
  growth: "increament" | "decrement" | "stagnant";
  value?: string;
}

const StatsTile = ({
  header = "Total Revenue",
  growth = "increament",
  value = "value",
}: statsTileProps) => {
  return <div className={classes["stats-tile-container"]}>StatsTile</div>;
};

export default StatsTile;
