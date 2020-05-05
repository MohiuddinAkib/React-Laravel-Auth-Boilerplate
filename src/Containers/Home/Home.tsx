import React from "react";
import echo from "../../config/echo";
import NavLayout from "../../components/Layouts/NavLayout/NavLayout";

const Home: React.FC = (props) => {
  React.useEffect(() => {
    echo
      .getInstance()
      .private("App.User.18")
      .listen("TestEvent", (e: any) => {
        console.log("event emitted", e);
      });
  }, []);
  return <NavLayout>This is home page</NavLayout>;
};

export default Home;
