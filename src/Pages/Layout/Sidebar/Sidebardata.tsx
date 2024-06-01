export interface SidebarItem {
  id: number;
  title: string;
  icon: string;
  children?: SidebarItem[];
}

const sidebarData: SidebarItem[] = [
  {
    id: 1,
    title: "NAVIGATION",
    icon: "",
    children: [
      {
        id: 11,
        title: "Dashboard",
        icon: "",
      },
    ],
  },
  {
    id: 2,
    title: "APPS",
    icon: "",
    children: [
      {
        id: 21,
        title: "Calender",
        icon: "",
      },
      {
        id: 22,
        title: "Email",
        icon: "",
      },
      {
        id: 23,
        title: "Projects",
        icon: "",
      },
      {
        id: 24,
        title: "Tasks",
        icon: "",
      },
    ],
  },
  {
    id: 3,
    title: "CUSTOM",
    icon: "",
    children: [
      {
        id: 31,
        title: "Pages",
        icon: "",
      },
      {
        id: 32,
        title: "Layouts",
        icon: "",
      },
      {
        id: 33,
        title: "Horizontal Nav",
        icon: "",
      },
      {
        id: 34,
        title: "Dark",
        icon: "",
      },
    ],
  },
];

export default sidebarData;
