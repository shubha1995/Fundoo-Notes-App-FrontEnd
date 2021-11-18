import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { BrowserRouter as Router} from 'react-router-dom'
import * as Yup from 'yup'
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import '../Login/login.scss';
import { useHistory } from 'react-router-dom';
import { UserNode } from "../../Services/User";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const userNode = new UserNode ()

const Login = (props) => {  
  const history = useHistory(); 
  const initialValues = {
    emailId:'',
    password:''
} ;
const validationSchema=Yup.object().shape({
  emailId:Yup.string().email('please enter valid email').required("Enter a email address"),
  password:Yup.string().min(6, "Password must be at least 6 characters").required("Enter a password")

});


const onSubmit=(values,props)=>{
 
  const userCredentials = {
    email: values.emailId,
    password: values.password
  };
  
  
  userNode.login(userCredentials)
       .then((res) => {
         localStorage.setItem('token', res.data.token);
         setTimeout(() => {
          history.push('/dashboard');
        }, 5000);
         toast.success("Login Successfull ✔");
      }).catch((error) => {
        toast.error("Please enter valid email & password");
      });
    }
    
    

    return (
      <Router>
        <Grid className="display-center">
          <Paper elevation={8} className="paperStyle">
            <Grid align="center">
              <FundooHeader />
              <h3 data-testid="login">Sign In</h3>
            </Grid>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form data-testid="form">
                  <Field
                    as={TextField}
                    data-testid="email"
                    label="Email Id"
                    name="emailId"
                    variant="outlined"
                    fullWidth
                    className="tfStyle"
                    helperText={<ErrorMessage name="emailId" />}
                  />
                  <Field
                    as={TextField}
                    label="Password"
                    data-testid="password"
                    name="password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    helperText={<ErrorMessage name="password" />}
                  />
              <p className='register'>
                <Button href='/forgotPassword' color='primary' variant = 'text'>Forgot password</Button>
              </p>  
                  <Button
                    data-testid="button"
                    type="submit"
                    color="primary"
                    variant="contained"
                    className="buttonStyle"
                    fullWidth
                    disabled={props.isSubmitting}
                  >
                    {props.isSubmitting ? "Loading" : "Sign in"}
                  </Button>
                </Form>
              )}
            </Formik>
              <p className='register'>
                <Button href='/register' 
                color='primary' variant = 'text'>Create account</Button>
              </p> 
          </Paper>
          <ToastContainer />
        </Grid>
      </Router>
    );
  };

export default Login;