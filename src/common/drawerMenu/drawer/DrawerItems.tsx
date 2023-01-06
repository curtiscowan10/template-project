import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import {NavigationItems, NavigationItemType} from "../../../constants/NavigationItems";
import "./DrawerItems.scss";

const DrawerItems = () => (
  <List>
    {NavigationItems.map(({icon, text}: NavigationItemType) => (
      <ListItem key={text} disablePadding className="drawer__menuItem">
        {icon}
        <ListItemButton>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default DrawerItems;