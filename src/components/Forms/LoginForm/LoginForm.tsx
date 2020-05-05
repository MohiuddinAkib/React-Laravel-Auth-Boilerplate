import React from "react";
import styles from "./LoginForm.module.css";
import {
  CardContent,
  TextField,
  Button,
  CardActions,
  CardHeader,
  Typography,
  Grid,
  Link,
  Avatar,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import useLoginForm from "../../../hooks/useLoginForm";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { fetchUser } from "../../../store/actions/authActions";
import { setErrorMsg, showMsg } from "../../../store/actions/messageActions";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { formik, status, error, isFetching, signInStatus } = useLoginForm();

  React.useEffect(() => {
    if (signInStatus) {
      dispatch(fetchUser());
    }
  }, [signInStatus]);

  React.useEffect(() => {
    if (!!error.message) {
      dispatch(setErrorMsg(error.message));
      dispatch(showMsg());
    }
  }, [error.message]);

  return (
    <>
      <CardHeader
        title={
          <>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" align="center">
              Sign in
            </Typography>
          </>
        }
      />
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            className={styles.textField}
            onChange={formik.handleChange}
            error={error?.errors?.hasOwnProperty("email")}
            helperText={error?.errors?.email}
          />

          <TextField
            fullWidth
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            value={formik.values.password}
            className={styles.textField}
            onChange={formik.handleChange}
            error={error?.errors?.hasOwnProperty("password")}
            helperText={error?.errors?.password}
          />
        </form>
      </CardContent>
      <CardActions className={styles.actions}>
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          onClick={formik.submitForm}
          disabled={formik.isSubmitting}
        >
          Sign in
        </Button>

        <Grid container className={styles.links}>
          <Grid item xs>
            <Link component={RouterLink} to="/forgot-password">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/register">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </>
  );
};

export default LoginForm;
