import React, { useState } from "react";
import classes from "./Admin.module.scss";
import styles from "../../DesignSystem/_classes.module.scss";
import DatePicker from "react-date-picker";
import Button from "../../component/Button/Button.tsx";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const AdminPage = () => {
  const clickhandler = () => {
    alert("button clicked");
  };

  return (
    <div className={classes["admin-dashboard-container"]}>
      <div className={classes["admin-dashboard-header"]}>
        <div className={classes["admin-dashboard-heading"]}>Dashboard</div>
        <div className={classes["admin-dashboard-leftcontainer"]}>
          <div className={classes["admin-dashboard-daterange"]}></div>
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
        <div
          style={{ height: "100px", border: "1px solid blue" }}
          className={styles["card"]}
        >
          a
        </div>
        <div style={{ height: "100px", border: "1px solid yellow" }}>b</div>
        <div style={{ height: "100px", border: "1px solid green" }}>c</div>
        <div style={{ height: "100px", border: "1px solid green" }}>c</div>
      </div>
    </div>
  );
};

export default AdminPage;
