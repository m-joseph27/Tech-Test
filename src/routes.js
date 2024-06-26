import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdPerson,
  MdInsertChart,
} from "react-icons/md";
import TableComponent from "./views/table/tableComponent";
import DashboardView from "./views/dashboard";
import ProfileOverview from "./views/profile";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    layout: "/admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: DashboardView,
  },
  {
    name: "Data Tables",
    path: "/data-table",
    layout: "/admin",
    icon: <Icon as={MdInsertChart} width='20px' height='20px' color='inherit' />,
    component: TableComponent
  },
  {
    name: "Profile",
    path: "/profile",
    layout: "/admin",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: ProfileOverview
  },
];

export default routes;