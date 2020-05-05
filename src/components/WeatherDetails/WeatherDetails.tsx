import React from "react";
import style from "./WeatherDetails.module.css";
import { WeatherContext } from "../../context/WeatherContext";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Switch,
} from "@material-ui/core";

const WeatherDetails = () => {
  const context = React.useContext(WeatherContext);

  return (
    <Grid item elevation={0} component={Card} sm={8} className={style.card}>
      <CardContent>
        <Typography>tHIS is weather details component</Typography>
      </CardContent>
      <CardActions className={style.cardActions}>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>C</Grid>
            <Grid item>
              <Switch />
            </Grid>
            <Grid item>F</Grid>
          </Grid>
        </Typography>
      </CardActions>
    </Grid>
  );
};

export default WeatherDetails;
