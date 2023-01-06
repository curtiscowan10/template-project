import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import DrawerItems from "./DrawerItems";

type DrawerProps = {
  open: boolean;
  handleDrawerToggle: () => void;
};

const Drawer = ({ open, handleDrawerToggle }: DrawerProps) => {
  const drawerWidth: number = open ? 240 : 60; 
  return (
    <MuiDrawer
      open
      variant="persistent"
      onClose={handleDrawerToggle}
      sx={{
        width: drawerWidth,
        ["& .MuiDrawer-paper"]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <DrawerItems />
    </MuiDrawer>
  )
};

export default Drawer;
