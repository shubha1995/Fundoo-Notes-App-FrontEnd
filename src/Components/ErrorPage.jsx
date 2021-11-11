import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import image from "../images/eror404.png";

const ErrorPage = () => {
  return (
    <Grid>
      <h1>Page Not Found</h1>
      <Link to="/login">Back To Login Page</Link>
      <img src= {image} alt=""></img>
    </Grid>
  );
};

export default ErrorPage;