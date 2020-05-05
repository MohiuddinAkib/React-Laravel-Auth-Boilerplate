import React from "react";
import styles from "./Register.module.css";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

const Register: React.FC = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
