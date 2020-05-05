import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    alert: {
      width: "90%",
      margin: "auto",
      marginTop: "0.5rem",
    },
    avatar: {
      margin: "auto",
      marginBottom: "0.5rem",
    },
  })
);
