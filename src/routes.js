import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPieChart,
  MdHome,
} from "react-icons/md";
import TableComponent from "./views/tables/tableComponent";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    layout: "/admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    // component: MainDashboard,
  },
  {
    name: "Data Tables",
    path: "/data-table",
    layout: "/admin",
    icon: <Icon as={MdPieChart} width='20px' height='20px' color='inherit' />,
    component: TableComponent
  }
];

export default routes;