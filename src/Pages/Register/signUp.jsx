import React from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
                    <h2>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='firstName' placeholder="Enter your First Name" />
                    <TextField fullWidth label='lastName' placeholder="Enter your Last Name" />
                    <TextField fullWidth label='Email' placeholder="Please enter valid Email Id" />
                    <TextField fullWidth label='Password' type="password" placeholder="Provide your password" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and condition."
                    />
                    <Button type='submit' variant='contained' color='primary' style={btstyle} fullWidth>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;