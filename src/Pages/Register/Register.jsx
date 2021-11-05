import React from "react";
import { Grid, Paper,  TextField, Button } from "@material-ui/core";
import { BrowserRouter as Router} from 'react-router-dom';
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Register/Register.scss";
import { UserNode } from "../../Services/User";
import { useHistory } from "react-router";


const userNode = new UserNode();
const SignUp = () => {
  const history = useHistory();
  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
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
  });

  const onSubmit = (values, props) => {
    console.log(values);
    if (values && !values.firstName && !values.lastName) return;
    const userDetails = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.emailId,
      password: values.password,
    };
    userNode
      .registration(userDetails)
      .then((res) => {
        alert("Data is submitted");
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Router>
    <>
      <Grid className="formStyle">
        <Paper className="register-container paperStyle">
          <div className="register-form">
            <h3 className="header" data-testid="title">
            <FundooHeader/>
              <span className="headerStyle" data-testid="register">
                {" "}
                <h5>Please fill form to create an account !</h5>
              </span>
            </h3>

            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form className="register-form-inputs" data-testid="form">
                  <Grid container spacing={5} className="register-form-element">
                    <Grid item xs={16} sm={6}>
                      <Field
                        className="register-form-inputs" data-testid="firstName"
                        as={TextField}
                        label="First Name"
                        name="firstName"
                        placeholder="Enter First Name"
                        variant="outlined"
                        fullWidth
                        helperText={<ErrorMessage name="firstName" />}
                      />
                    </Grid>
                    <Grid item xs={16} sm={6}>
                      <Field
                        className="register-form-inputs" data-testid="lastName"
                        as={TextField}
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter Last Name"
                        variant="outlined"
                        fullWidth
                        helperText={<ErrorMessage name="lastName" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} className="register-form-element">
                    <Field
                      className="register-form-inputs" data-testid="email"
                      as={TextField}
                      label="Email Address"
                      name="emailId"
                      placeholder="Enter Email"
                      variant="outlined"
                      fullWidth
                      helperText={<ErrorMessage name="emailId" />}
                    />
                  </Grid>
                  <Grid container spacing={1} className="register-form-element">
                    <Grid item xs={12} sm={6}>
                      <Field
                        className="register-form-inputs" data-testid="password"
                        as={TextField}
                        label="Password"
                        name="password"
                        placeholder="Enter password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        helperText={<ErrorMessage name="password" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={1}
                    className="register-form-element submit-button"
                  >
                    <Button
                      onClick={onSubmit}
                      type="submit"
                      variant="contained"
                      className="register-form-button"
                      fullWidth
                    >
                      Register
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
            <p className="signInlink"> <Button href='/login' color='primary' variant = 'text'>Sign in instead</Button></p>
          </div>
          <div className="register-avatar">
            <img
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt=""
            ></img>
          </div>
        </Paper>
      </Grid>
    </>
    </Router>
  );
};

export default SignUp; 