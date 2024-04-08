import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Page404 = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate({ pathname: "/" });
  };
  return (
    <div>
      <h1>Not Found 404</h1>
      <label onClick={navigateToHome}>Home</label>
    </div>
  );
};
export default Page404;
