import React from "react";
import classes from "./Header.module.scss";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search_icon.svg";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/notification_icon.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/settings_icon.svg";
import { ReactComponent as GlobeIcon } from "../../../assets/icons/globe_icon.svg";
import { ReactComponent as TankIcon } from "../../../assets/icons/tank.svg";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-logo-container"]}>
        <TankIcon />
      </div>
      <div className={classes["header-action-btns-container"]}>
        <div className={classes["search-input-container"]}>
          <div className={classes["search-icon"]}></div>
          <div className={classes["search-input"]}>
            <input type="text" placeholder="Search..."></input>
            <div className={classes["search-input-container"]}>
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className={classes["language-btn-container"]}>
          <GlobeIcon />
        </div>
        <div className={classes["notification-btn-container"]}>
          <NotificationIcon />
        </div>
        <div className={classes["settings-btn-container"]}>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
