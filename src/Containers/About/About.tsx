import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      About page
      <Link to="/login">Login page</Link>
      <Link to="/register">Register page</Link>
    </div>
  );
};

export default About;
