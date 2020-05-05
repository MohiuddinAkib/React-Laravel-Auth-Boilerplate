import React from "react";
import { Grid } from "@material-ui/core";

const CenterLayout: React.FC = (props) => {
  return (
    <Grid container justify="center">
      {props.children}
    </Grid>
  );
};

export default CenterLayout;
