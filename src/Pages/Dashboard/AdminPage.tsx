import React from "react";
import classes from "./Admin.module.scss";
import styles from "../../DesignSystem/_classes.module.scss";

const AdminPage = () => {
  let statsTileArr = [{ header: "" }, {}, {}, {}];

  return (
    <div className={classes["admin-dashboard-container"]}>
      <div className={classes["admin-dashboard-header"]}></div>
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
