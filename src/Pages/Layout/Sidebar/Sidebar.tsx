import React from "react";
import classes from "./Sidebar.module.scss";
import sidebarData from "./Sidebardata.tsx";

const Sidebar = () => {
  return (
    <div className={classes["sidebar-container"]}>
      {sidebarData.map((el) => {
        return (
          <div className={classes["sidebar-item-parent-container"]}>
            <p>{el.title}</p>
            <div className={classes["sidebar-item-children-container"]}>
              {el.children.map((el) => {
                return (
                  <div className={classes["sidebar-item-child"]}>
                    {el.icon}
                    {el.title}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
