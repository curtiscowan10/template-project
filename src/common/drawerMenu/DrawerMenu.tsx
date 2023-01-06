import React from "react";
import AppBar from "./appBar/AppBar";
import Drawer from "./drawer/Drawer";

type DrawerMenuProps = {
    open: boolean
    handleDrawerToggle: () => void
}

const DrawerMenu = ({open, handleDrawerToggle }: DrawerMenuProps) => (
  <>
    <AppBar handleDrawerToggle={handleDrawerToggle} />
    <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
  </>
);

export default DrawerMenu;
