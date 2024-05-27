import React from "react";
import classes from "./TopPerformers.module.scss";
import { ReactComponent as UpArrow } from "../../../assets/icons/up_arrow.svg";
import { ReactComponent as DownArrow } from "../../../assets/icons/down_arrow.svg";

const TopPerformers = () => {
  let listArr = [
    { text: "Direct", percent: 80, type: "increase" },
    { text: "Social", percent: 50, type: "decrease" },
    { text: "Referral", percent: 20, type: "increase" },
    { text: "Bounce", percent: 60, type: "decrease" },
    { text: "Internet", percent: 40, type: "increase" },
    { text: "Advertisement", percent: 90, type: "increase" },
  ];

  return (
    <div className={classes["list-container"]}>
      {listArr.map((el) => {
        return (
          <div className={classes["list-ele"]}>
            <div className={classes["list-ele-header-container"]}>
              <p>{el.text}</p>
              <div className={classes["list-ele-percent-container"]}>
                {el.type === "increase" ? <UpArrow /> : <DownArrow />}
                <p
                  className={classes["percent-value"]}
                  style={{
                    color: el.type === "increase" ? "#79ac2e" : "#f9545e",
                  }}
                >
                  {el.percent}%
                </p>
              </div>
            </div>
            <div className={classes["list-fill-bar-container"]}>
              <div
                className={classes["filler"]}
                style={{
                  width: `${el.percent}%`,
                  backgroundColor:
                    el.type === "increase" ? "#79ac2e" : "#f9545e",
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopPerformers;
