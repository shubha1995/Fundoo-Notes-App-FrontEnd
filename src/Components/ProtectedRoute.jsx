import React from "react";
import { Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          console.log("error");
          return <ErrorPage />;
        }
      }}
    />
  );
}

export default ProtectedRoute;