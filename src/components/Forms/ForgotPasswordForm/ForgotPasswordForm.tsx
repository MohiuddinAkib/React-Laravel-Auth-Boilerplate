import React from "react";
import { Alert } from "@material-ui/lab";
import { useStyles } from "./ForgotPasswordForm.style";
import { NoEncryption as NoEncryptionIcon } from "@material-ui/icons";
import useForgotPasswordForm from "../../../hooks/useForgotPasswordForm";
import {
  CardContent,
  CardActions,
  Button,
  TextField,
  CardHeader,
  Avatar,
  Typography,
} from "@material-ui/core";

const ForgotPasswordForm: React.FC = (props) => {
  const classes = useStyles();

  const { formik, data, error } = useForgotPasswordForm();
  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    if (data) {
      setShowAlert(true);
    }
  }, [data]);

  const closeAlert = () => setShowAlert(false);

  return (
    <>
      {showAlert && (
        <Alert onClose={closeAlert} className={classes.alert}>
          {data}
        </Alert>
      )}
      <CardHeader
        title={
          <>
            <Avatar className={classes.avatar}>
              <NoEncryptionIcon />
            </Avatar>
            <Typography variant="h5" align="center">
              Forgot Password
            </Typography>
          </>
        }
      />
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            focused
            name="email"
            type="email"
            variant="outlined"
            label="Email Address*"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={error?.errors?.hasOwnProperty("email")}
            helperText={error?.errors?.email}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          color="primary"
          disableElevation
          variant="contained"
          onClick={formik.submitForm}
          disabled={formik.isSubmitting}
        >
          Reset Password
        </Button>
      </CardActions>
    </>
  );
};

export default ForgotPasswordForm;
