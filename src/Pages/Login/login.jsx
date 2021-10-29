/* eslint-disable no-undef */
import React from "react";
import { Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import { ErrorMessage ,Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import '../Login/login.scss';

const Login =() => {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "50px auto",
    };
    const fieldStyle = {margin:'5vh 0'}; 


    return (
        <Formik
        initialValues ={{
            emailId:'',
            password:''
          }}
          validationSchema ={ yup.object({
            emailId: yup.string().email('Invalid Email address').required('Required'),
            password:yup.string()
            .required('Required')
    
          })}
          onSubmit = {values=>{
            console.log(values);
            Login(values)
              .then(response => console.log(response ))
              .catch(error=>console.log(error))
          }}
          >

        {formik =>(
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align="center">
                    <FundooHeader/>
                <h2 className="header">Sign In</h2>
                <h4>Use your FundooNotes Account</h4>
                </Grid>
                <Form onSubmit={formik.handleSubmit}> 
                <Field id="emailId"
                      as = {TextField} 
                      name = 'emailId'
                      label="EmailId" 
                      variant="outlined"
                      onChange = {formik.handleChange}
                      onBlur = {formik.handleBlur}
                      value={formik.values.emailId}
                      
                      helperText = {<ErrorMessage name = 'emailId'/>}
                      fullWidth
                      required/>
                      
                  <Field
                      as = {TextField}
                      name="password"
                      id="password" 
                      label="Password" 
                      type="password" 
                      fullWidth 
                      variant="outlined" 
                      onChange = {formik.handleChange}
                      helperText = {<ErrorMessage name = 'password'/>}
                      value={formik.values.password}
                      required  
                      margin="normal"
                      style = {fieldStyle}/>
                      
                <Typography className="forgotPass">
                    <Link href="#">Forgot password</Link>
                </Typography>
                <Typography>
                    <Button type = "Submit" 
                    color = "primary" 
                    variant = "contained"  
                    className='signIn' fullWidth>
                      Sign In</Button>
                  </Typography>

                <p className='register'><Button href='/register' color='primary' variant = 'text'>Create account</Button></p>          
                </Form>
            </Paper>
        </Grid>
        )}
        </Formik>
    )
}

export default Login;