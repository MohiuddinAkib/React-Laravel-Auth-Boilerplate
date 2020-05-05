import React from "react";
import styles from "./AuthLayout.module.css";
import { Grid, Card } from "@material-ui/core";
import CenterLayout from "../CenterLayout/CenterLayout";

const AuthLayout: React.FC = (props) => {
  return (
    <CenterLayout>
      <Grid item md={4} component={Card} className={styles.container}>
        {props.children}
      </Grid>
    </CenterLayout>
  );
};

export default AuthLayout;
