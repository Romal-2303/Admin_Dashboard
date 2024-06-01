import React from "react";
import { ReactComponent as GridIcon } from "../../../assets/icons/gridIcon.svg";

interface SidebarItem {
  title: string;
  children?: any;
}

const sidebarData: SidebarItem[] = [
  {
    title: "NAVIGATION",
    children: [{ icon: <GridIcon />, title: "Dashboard" }],
  },
];

export default sidebarData;
