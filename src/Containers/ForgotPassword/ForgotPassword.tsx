import React from "react";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";
import ForgotPasswordForm from "../../components/Forms/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPassword: React.FC = (props) => {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
