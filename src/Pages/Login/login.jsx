/* eslint-disable no-unused-vars */
import React from "react"
import { Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import FundooHeader from '../../Components/FundooHeader/FundooHeader';

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
                </Grid>
                <TextField label= "email Id" placeholder= "Enter user emailId" fullWidth required/>
                <TextField label= "Password" placeholder= "Enter password" type="password" fullWidth required/>
                <Button type="submit" color="primary" variant="contained" style={btstyle} fullWidth> Sign in</Button>
                <Typography>
                    <Link href="#">Forgot password</Link>
                </Typography>
                <Typography> Do you have an account ?
                    <Link href="#">
                        Sign Up
                    </Link>
                </Typography>            
            </Paper>
        </Grid>
    )
}

export default Login;