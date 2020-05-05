import React from "react";
import { useFormik } from "formik";
import { useQuery } from "react-query";
import AuthService from "../services/AuthService";
import container from "../services/serviceContainer";

const authService = container.get<AuthService>("AuthService");

const useLoginForm = () => {
  const [signInStatus, setSignInStatus] = React.useState(false);
  const [error, setError] = React.useState<{
    message: string;
    errors: { [key: string]: string[] };
  }>({ message: "", errors: {} });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, helpers) => {
      try {
        await refetch({ throwOnError: true });
        helpers.resetForm();
        setSignInStatus(true);
      } catch (error) {
        console.log(error);
        // setError(error.response.data);
      }

      helpers.setSubmitting(false);
    },
  });

  const { status, data, refetch, isFetching } = useQuery<string, any>(
    "login",
    () => authService.login(formik.values),
    {
      manual: true,
      retry: 0,
    }
  );

  return {
    data,
    error,
    formik,
    status,
    isFetching,
    signInStatus,
  };
};

export default useLoginForm;
