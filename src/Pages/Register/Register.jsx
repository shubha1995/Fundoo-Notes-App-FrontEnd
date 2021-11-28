import React from "react";
import { Grid, Paper,  TextField, Button } from "@material-ui/core";
import { BrowserRouter as Router} from 'react-router-dom';
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Register/Register.scss";
import { UserNode } from "../../Services/User";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const userNode = new UserNode();
const SignUp = () => {
  const history = useHistory();
  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    ConfirmPassword: "",
  };
const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "first Name is too short minimum 3 Char is required")
      .required("Fisrts name required"),
    lastName: Yup.string()
      .min(3, "last Name is too short minimum 3 Char is required")
      .required("Last Name required"),
    emailId: Yup.string()
      .email("please enter valid email")
      .required("emailId is required"),
    password: Yup.string()
      .min(
        8,
        "Use 8 or more characters with a mix of letters, numbers & symbols"
      )
      .required("Enter a password"),
      ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password doesn't matched")
      .required("Confirm password should match password"),
  });

  const onSubmit = (values, props) => {
    if (values && !values.firstName && !values.lastName) return;
    // const userDetails = {
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   email: values.emailId,
    //   password: values.password,
    // };
    userNode
      .registration(values)
      .then((res) => {
        props.resetForm()
        setTimeout(() => {
          history.push("/login");
        }, 5000);
        toast.success("data submitted successfully ✔", {
          position: "top-center",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <Router>
      <Grid className="display-center">
        <Paper elevation={20} className="paperStyleSignUP">
          <Grid container spacing={5}>
            <Grid item sm={6} md={6}>
              <Grid>
              <h3 className="header" data-testid="title">
                <FundooHeader />
                <h2 className="headerStyle" data-testid="register">
                Please fill form to create an account !
                </h2>
                </h3>
              </Grid>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form data-testid="form">
                    <Grid container spacing={5}>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="First Name"
                          name="firstName"
                          data-testid="firstName"
                          variant="outlined"
                          className="bottomMargin"
                          helperText={<ErrorMessage name="firstName" />}
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Last Name"
                          name="lastName"
                          data-testid="lastName"
                          variant="outlined"
                          className="bottomMargin"
                          helperText={<ErrorMessage name="lastName" />}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                      <Grid item sm={12}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Email"
                          name="emailId"
                          data-testid="email"
                          variant="outlined"
                          className="bottomMargin"
                          helperText={<ErrorMessage name="emailId" />}
                        />
                        <Grid className="setText">
                          You can use letters, numbers &amp; periods
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          variant="outlined"
                          label="Password"
                          name="password"
                          data-testid="password"
                          type="password"
                          helperText={<ErrorMessage name="password" />}
                          className="bottomMargin"
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          variant="outlined"
                          label="Confirm Password"
                          name="ConfirmPassword"
                          data-testid="confirmPassword"
                          type="password"
                          helperText={<ErrorMessage name="ConfirmPassword" />}
                          className="bottomMargin"
                        />
                      </Grid>
                      <Grid className="setText1">
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols
                      </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                      <Grid item sm={12}>
                        <Button
                          // onClick={onSubmit}
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                        >
                          Sign Up
                        </Button>
                        <p className="signInlink"> 
                        <Button href='/login' color= "primary" variant = 'text'>Sign in instead</Button>
                        </p>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
            <Grid item sm={6} md={6}>
              <img
                className="IMG"
                src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                alt="registerImage"
              />
              <p className="imgContain">Create your own notes</p>
            </Grid>
          </Grid>
        </Paper>
        <ToastContainer />
      </Grid>
    </Router>
  );
};
export default SignUp; 