import React from "react";
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import { ErrorMessage ,Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import "../ForgotPassword/ForgotPassword.scss";


const ForgotPassword =() => {
    const paperStyle = {
        padding: 40,
        height: "50vh",
        width: "300px",
        margin: "80px auto",
    };
    
    return (
        <Formik
        initialValues ={{
            emailId:''
          }}
          validationSchema ={ yup.object({
            emailId: yup.string().email('Invalid Email address'),
            password:yup.string()
            .required('Required')
    
          })}
          onSubmit = {values=>{
            console.log(values);
            ForgotPassword(values)
              .then(response => console.log(response ))
              .catch(error=>console.log(error))
          }}
          >

        {formik =>(
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align="center">
                    <FundooHeader/>
                <h2 className="header">Enter your email</h2>
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
                      
                      
                      
                <Typography>
                <br></br>
                    <Button type = "Submit" 
                    color = "primary" 
                    variant = "contained"  
                    className='signIn' fullWidth>
                      Send</Button>
                  </Typography>
                </Form>
            </Paper>
        </Grid>
        )}
        </Formik>
    )
}

export default ForgotPassword;