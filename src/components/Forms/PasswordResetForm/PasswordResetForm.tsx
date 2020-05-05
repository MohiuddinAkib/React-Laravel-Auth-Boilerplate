import React from "react";
import queryString from "query-string";
import { Alert } from "@material-ui/lab";
import { useStyles } from "./PasswordResetForm.style";
import { useParams, useLocation } from "react-router-dom";
import {
  CardContent,
  TextField,
  CardActions,
  Button,
  CardHeader,
  Typography,
} from "@material-ui/core";
import usePasswordResetForm from "../../../hooks/usePasswordResetForm";

const PasswordResetForm: React.FC = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const params = useParams<{ token: string }>();
  const [showAlert, setShowAlert] = React.useState(false);
  const { formik, data, error } = usePasswordResetForm();

  React.useEffect(() => {
    const queryParams = queryString.parse(location.search);

    formik.setFieldValue("email", queryParams.email);
  }, [location.search]);

  React.useEffect(() => {
    formik.setFieldValue("token", params.token);
  }, [params]);

  React.useEffect(() => {
    if (data) {
      setShowAlert(true);
    }
  }, [data]);

  const closeAlert = () => setShowAlert(false);

  return (
    <>
      {showAlert && <Alert onClose={closeAlert}>{data}</Alert>}
      <CardHeader
        title={
          <Typography align="center" variant="h5">
            Enter new password
          </Typography>
        }
      />
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            className={classes.textField}
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={error?.errors?.password}
            error={error?.errors?.hasOwnProperty("password")}
          />
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            label="Confirm Password"
            name="password_confirmation"
            className={classes.textField}
            onChange={formik.handleChange}
            value={formik.values.password_confirmation}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={formik.submitForm}
          disabled={formik.isSubmitting}
        >
          Reset password
        </Button>
      </CardActions>
    </>
  );
};

export default PasswordResetForm;
