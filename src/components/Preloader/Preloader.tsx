import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

const Preloader: React.FC<{ open: boolean }> = (props) => {
  return (
    <Backdrop open={props.open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Preloader;
