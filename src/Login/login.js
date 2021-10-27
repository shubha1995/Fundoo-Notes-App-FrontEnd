/* eslint-disable no-unused-vars */
import React from "react"
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const Login =() => {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "50px auto",
    };
    const avatarStyle = { backgroundColor: "#1bbd7e"}
    const btstyle = { margin: "8px 0" };
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <PersonIcon />
                    </Avatar>
                <h2>Sign In</h2>
                </Grid>
                <TextField label= "email Id" placeholder= "Enter user emailId" fullWidth required/>
                <TextField label= "Password" placeholder= "Enter password" type="password" fullWidth required/>
                <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Remember me"/>
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