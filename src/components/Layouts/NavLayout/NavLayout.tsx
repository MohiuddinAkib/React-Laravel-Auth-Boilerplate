import React from "react";
import { useStyles } from "./NavLayout.style";
import { AppBar, Toolbar } from "@material-ui/core";

const NavLayout: React.FC = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>Toolbar</Toolbar>
      </AppBar>
      {props.children}
    </>
  );
};

export default NavLayout;
