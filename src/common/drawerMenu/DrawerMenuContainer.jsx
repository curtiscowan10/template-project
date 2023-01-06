import React, { useState } from "react";
import DrawerMenu from "./DrawerMenu";

function DrawerContainer() {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return <DrawerMenu open={open} handleDrawerToggle={handleDrawerToggle} />;
}

export default DrawerContainer;
