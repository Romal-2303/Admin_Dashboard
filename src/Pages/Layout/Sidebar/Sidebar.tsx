import React from "react";
import classes from "./Sidebar.module.scss";
import sidebarData from "./Sidebardata.tsx";

const Sidebar = () => {
  return (
    <div className={classes["sidebar-container"]}>
      <ul className={classes["sidebar"]}>
        {sidebarData.map((item) => (
          <li key={item.id}>
            <div className={classes["sidebar-item"]}>
              {item.title}
              {item.children && (
                <ul className={classes["sub-menu"]}>
                  {item.children.map((child) => (
                    <li key={child.id}>{child.title}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
