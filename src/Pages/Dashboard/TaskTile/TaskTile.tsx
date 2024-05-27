import React from "react";
import classes from "./TaskTile.module.scss";
import styles from "../../../DesignSystem/_classes.module.scss";

const TaskTile = () => {
  let taskList = [
    "Draft the new contract document for sales",
    "Review and approve timesheets for the week",
    "Prepare financial report for Q2",
    "Respond to client emails and inquiries",
    "Create and distribute the monthly newsletter",
    "Audit inventory and restock supplies",
    "Plan and coordinate the upcoming company event",
    // "Conduct performance reviews for team members",
    // "Update and backup the company database",
    // "Review and renew software licenses",
  ];

  return (
    <div className={classes["task-container"]}>
      <div className={classes["task-header-container"]}>
        <p className={styles["chart-header"]}>Tasks</p>
        <div className={classes["viewall-btn"]}>
          <button>View All</button>
        </div>
      </div>
      <div className={classes["task-body-container"]}>
        {taskList.map((el) => (
          <div className={classes["task-line-container"]}>
            <input type="checkbox" id="checkbox" />
            <div>{el}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTile;
