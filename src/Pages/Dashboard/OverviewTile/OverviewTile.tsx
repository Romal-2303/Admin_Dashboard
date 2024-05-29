import React from "react";
import classes from "./OverviewTile.module.scss";
import styles from "../../../DesignSystem/_classes.module.scss";
import { ReactComponent as DollarIcon } from "../../../assets/icons/dollar_icon.svg";
import { ReactComponent as EyeIcon } from "../../../assets/icons/eye_icon.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile_icon.svg";

const OverviewTile = () => {
  let dataArr = [
    { text: "Total Visitors", value: "121,000", icon: <ProfileIcon /> },
    { text: "Total Product Views", value: "21,000", icon: <EyeIcon /> },
    { text: "Revenue per visitor", value: "$21.5", icon: <DollarIcon /> },
  ];

  return (
    <div className={classes["overview-tile-container"]}>
      <div
        className={`${classes["overview-header-container"]} ${styles["chart-header"]}`}
      >
        Overview
      </div>
      <div className={classes["overview-content-container"]}>
        {dataArr.map((el) => (
          <>
            <div className={classes["separator"]}></div>
            <div className={classes["content-list-container"]}>
              <div className={classes["value-text-container"]}>
                <div className={classes["value"]}>{el.value}</div>
                <div className={classes["text"]}>{el.text}</div>
              </div>
              <div className={classes["icon-container"]}>{el.icon}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default OverviewTile;
