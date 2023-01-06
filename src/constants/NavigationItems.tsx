import AccountBalance from "@mui/icons-material/AccountBalance";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Settings from "@mui/icons-material/Settings";
import React, { ReactElement } from "react";

export type NavigationItemType = {
  icon: ReactElement
  text: string
}
export const NavigationItems: Array<NavigationItemType> = [
  {icon: <AccountCircle />, text: "firstPage"},
  {icon: <Settings />, text: "secondPage"},
  {icon: <AccountBalance />, text: "thirdPage"}
];