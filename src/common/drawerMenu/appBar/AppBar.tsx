import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

type AppBarProps = {
  handleDrawerToggle: () => void;
};

const AppBar = ({ handleDrawerToggle }: AppBarProps) => (
  <MuiAppBar
    position="relative"
    sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <IconButton
        component="label"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Title
      </Typography>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
