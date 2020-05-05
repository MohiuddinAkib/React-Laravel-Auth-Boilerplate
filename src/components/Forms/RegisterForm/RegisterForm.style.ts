import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    textField: {
      margin: "0.5rem 0",
    },
    cardActions: {
      flexDirection: "column",
    },
    links: {
      margin: "0.5rem 0",
    },
    avatar: {
      margin: "auto",
      marginBottom: "0.5rem",
      backgroundColor: "#3f51b5",
    },
  })
);
