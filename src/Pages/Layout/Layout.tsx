import React, { ReactNode } from "react";
import Header from "./Header/Header.tsx";
import Sidebar from "./Sidebar/Sidebar.tsx";
import classes from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={classes["layout-container"]}>
      <Header />
      <div className={classes["sidebar-webody-container"]}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
