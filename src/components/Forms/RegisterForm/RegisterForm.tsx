import React from "react";
import { useFormik } from "formik";
import {
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
  Grid,
  Link,
  Avatar,
} from "@material-ui/core";
import { useQuery } from "react-query";
import { useStyles } from "./RegisterForm.style";
import { Link as RouterLink, useHistory } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import container from "../../../services/serviceContainer";
import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";

const authService = container.get<AuthService>("AuthService");

const RegisterForm: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = React.useState<{
    message: string;
    errors: { [key: string]: string[] };
  }>({ message: "", errors: {} });

  const [formSubmissionSuccess, setFormSubmissionSuccess] = React.useState(
    false
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit: async (values, helpers) => {
      try {
        await refetch({ throwOnError: true });
        formik.resetForm();
        setFormSubmissionSuccess(true);
      } catch (error) {
        setError((prevState) => error?.response?.data || prevState);
      }
      formik.setSubmitting(false);
    },
  });

  const { refetch, data } = useQuery(
    "register",
    () => authService.register(formik.values),
    { manual: true, retry: 0 }
  );

  React.useEffect(() => {
    if (formSubmissionSuccess) {
      history.push("/login");
    }
  }, [formSubmissionSuccess]);

  return (
    <>
      <CardHeader
        title={
          <>
            <Avatar className={classes.avatar}>
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h5" align="center">
              Sign Up
            </Typography>
          </>
        }
      />
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={classes.textField}
            helperText={error?.errors?.name}
            error={error?.errors?.hasOwnProperty("name")}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            value={formik.values.email}
            className={classes.textField}
            onChange={formik.handleChange}
            helperText={error?.errors?.email}
            error={error?.errors?.hasOwnProperty("email")}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
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
            label="Confirm password"
            name="password_confirmation"
            onChange={formik.handleChange}
            className={classes.textField}
            value={formik.values.password_confirmation}
          />
        </form>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={formik.submitForm}
          disabled={formik.isSubmitting}
        >
          Register
        </Button>

        <Grid container className={classes.links}>
          <Grid item>
            <Link component={RouterLink} to="/login">
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </>
  );
};

export default RegisterForm;
