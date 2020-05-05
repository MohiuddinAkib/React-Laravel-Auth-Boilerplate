import React from "react";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";
import PasswordResetForm from "../../components/Forms/PasswordResetForm/PasswordResetForm";

const PasswordReset = () => {
  return (
    <AuthLayout>
      <PasswordResetForm />
    </AuthLayout>
  );
};

export default PasswordReset;
