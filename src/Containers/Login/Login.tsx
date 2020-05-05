import React from "react";
import styles from "./Login.module.css";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
