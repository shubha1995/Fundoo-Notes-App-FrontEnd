/* eslint-disable no-unused-vars */
import React from "react"
import { Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import '../Login/login.scss'

const Login =() => {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "50px auto",
    };
    const btstyle = { margin: "8px 0", marginTop: 30, marginBottom: 30 };
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <FundooHeader/>
                <h2>Sign In</h2>
                <h4>Use your FundooNotes Account</h4>
                </Grid>
                <TextField variant="outlined" label= "email Id" placeholder= "Enter user emailId" fullWidth required margin="normal"/>
                <TextField variant="outlined" label= "Password" placeholder= "Enter password" type="password" fullWidth required margin="normal"/>
                <Typography>
                    <Link href="#">Forgot password</Link>
                </Typography>
                <Button type="submit" color="primary" variant="contained" style={btstyle} fullWidth > Sign in</Button>

                <p className='register'><Button href='/register' color='primary' variant = 'text'>Create account</Button></p>          
            </Paper>
        </Grid>
    )
}

export default Login;