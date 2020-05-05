import React from "react";
import { useFormik } from "formik";
import { useQuery } from "react-query";
import AuthService from "../services/AuthService";
import container from "../services/serviceContainer";

const authService = container.get<AuthService>("AuthService");

const usePasswordResetForm = () => {
  const [error, setError] = React.useState<{
    message: string;
    errors: { [key: string]: string };
  }>({ message: "", errors: {} });

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
      email: "",
      token: "",
    },
    onSubmit: async (values, helpers) => {
      try {
        await refetch({ throwOnError: true });
      } catch (error) {
        setError(error?.response?.data || {});
      }
      formik.setSubmitting(false);
    },
  });

  const { refetch, data } = useQuery(
    "password-reset",
    () => authService.resetPassword(formik.values),
    {
      manual: true,
      retry: 0,
    }
  );
  return {
    error,
    data,
    formik,
  };
};

export default usePasswordResetForm;
