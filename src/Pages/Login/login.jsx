import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { BrowserRouter as Router} from 'react-router-dom'
import * as Yup from 'yup'
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import '../Login/login.scss';
import { useHistory } from 'react-router-dom';
import { UserNode } from "../../Services/User";


const userNode = new UserNode ()

const Login = (props) => {
  const history = useHistory();  
  const initialValues = {
    emailId:'',
    password:''
} ;
const validationSchema=Yup.object().shape({
  emailId:Yup.string().email('please enter valid email').required("Enter a email address"),
  password:Yup.string().required("Enter a password")

});


const onSubmit=(values,props)=>{
 
  const userCredentials = {
    email: values.emailId,
    password: values.password
  };
  
  props.resetForm();
  
  userNode.login(userCredentials)
       .then((res) => {
         localStorage.setItem('token', res.data.token);
        
      }).catch((error) => {
        
      });
    }
    
    

  return (
    <Router>
    <div>
    <Grid className="formStyle">
      <Paper className="login-container login-paper">
        <div  align="center" className="login-form-container">
        <FundooHeader/>
          <Grid>
            <h2 data-testid="login">Sign in</h2>
          </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form data-testid="form"  className="login-form">
        <Field 
        as={TextField}
        className="EmailFieldStyle"
         data-testid="email" 
          label="email Id"
          name="emailId"
          placeholder="Enter user emailId"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="emailId"/>}
        />
        <Field 
        as={TextField}
        className="PasswordStyle"
        data-testid="password"
          label="Password"
          name="password"
          placeholder="Enter password"
          variant="outlined"
          type="password"
          fullWidth
          helperText={<ErrorMessage name="password"/>}
        />
        <p className='register'><Button href='/forgotPassword' color='primary' variant = 'text'>Forgot password</Button></p>  
        <Button 
        className="buttonMargin" 
        color = "primary" 
        type="submit" 
        data-testid="button"
        // onSubmit = {onSubmit}
        variant="contained"   
        fullWidth> 
        Sign in</Button> 
       
        <p className='register'><Button href='/register' color='primary' variant = 'text'>Create account</Button></p>    
            </Form>
          )
}
        </Formik>
        </div>
      </Paper>
    </Grid>
    </div>  
    </Router>
  );
};

export default Login;