import React from "react";
import { useFormik } from "formik";
import { useQuery } from "react-query";
import AuthService from "../services/AuthService";
import container from "../services/serviceContainer";

const authService = container.get<AuthService>("AuthService");

const useForgotPasswordForm = () => {
  const [error, setError] = React.useState<{
    message: string;
    errors: { [key: string]: string[] };
  }>({ message: "", errors: {} });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values, helpers) => {
      try {
        await refetch({ throwOnError: true });
        helpers.resetForm();
      } catch (error) {
        setError(error.response.data);
      }
      helpers.setSubmitting(false);
    },
  });

  const { refetch, data, status, isFetching } = useQuery(
    "password-reset-email",
    () => authService.sendResetLinkEmail(formik.values.email),
    { manual: true, retry: 0 }
  );

  return {
    formik,
    error,
    data,
    status,
    isFetching,
  };
};

export default useForgotPasswordForm;
