import React from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import "../Register/Register.scss";
const SignUp = () => {
    const paperStyle = { 
        padding: '30px 20px', 
        width: 300, 
        margin: "20px auto",
        height: "70vh",
     }
    const btstyle = { margin: "12px 0" };
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <FundooHeader/>
                    <h4>Please Fill Details to Create an Account</h4>
                    
                </Grid>
                <form>
                    <TextField variant="outlined" fullWidth label='First Name' placeholder="Enter your First Name" margin="normal" />
                    <TextField variant="outlined" fullWidth label='Last Name' placeholder="Enter your Last Name" margin="normal" />
                    <TextField variant="outlined" fullWidth label='Email' placeholder="Please enter valid Email Id" margin="normal" />
                    <TextField variant="outlined" fullWidth label='Password' type="password" placeholder="Provide your password" margin="normal" />
                    <Button type='submit' variant='contained' color='primary' style={btstyle} fullWidth>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;