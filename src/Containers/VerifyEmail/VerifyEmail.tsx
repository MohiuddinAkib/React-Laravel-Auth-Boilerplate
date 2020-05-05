import React from "react";
import { useQuery } from "react-query";
import AuthService from "../../services/AuthService";
import container from "../../services/serviceContainer";
import { useParams, useHistory } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";

const authService = container.get<AuthService>("AuthService");

const VerifyEmail: React.FC = (props) => {
  const history = useHistory();
  const params = useParams<{ id: string; hash: string }>();

  const { status, refetch } = useQuery(
    "verify-email",
    () => authService.verifyEmail(params.id, params.hash),
    { retry: 0, manual: true }
  );

  React.useEffect(() => {
    (async () => {
      try {
        await refetch({ throwOnError: true });
        // TODO: dipatch a global success
      } catch (error) {
        // TODO: dispatch a global error
        console.log(error.response.data);
      }
      history.push("/");
    })();
  }, []);

  if (status === "loading") {
    return <Preloader open={true} />;
  }

  return null;
};

export default VerifyEmail;
