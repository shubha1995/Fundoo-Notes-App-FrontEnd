/* eslint-disable no-undef */
import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import Services from "../../Services/NotesServices.js";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import "./ResetPassword.scss";
//const service = new Services();


function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
  }
  
  export default class forgotPassword extends React.Component {
    nextPath(path) {
      this.props.history.push(path);
    }
  
    constructor(props) {
      super(props);
      this.state = {
        password: "",
        passwordError: "",
        passwordFlag: false,
        confirmPassword: "",
        confirmPasswordError: "",
        confirmPasswordFlag: false,
        setOpen: false,
        open: false,
        snackMessage: "",
        snackType: "",
      };
    }
  
    token = window.location.href.split("/?")[1];
  
    change = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
    validate = () => {
      let isError = false;
      const errors = {
        passwordError: "",
        passwordFlag: false,
        confirmPasswordError: "",
        confirmPasswordFlag: false,
      };
  
      if (this.state.password.length === 0) {
        errors.passwordFlag = true;
        errors.confirmPasswordFlag = true;
        isError = true;
        errors.passwordError = "Enter Password";
      }
  
      if (this.state.confirmPassword !== this.state.password) {
        errors.confirmPasswordFlag = true;
        isError = true;
        errors.confirmPasswordError = "Passwords didn't match.";
      }
  
      this.setState({
        ...errors,
      });
  
      return isError;
    };
  
    onSubmit = (e) => {
      e.preventDefault();
      const err = this.validate();
      console.log(err);
      var tokeninput = this.token;
      const tokenString = "bearer " + tokeninput;
      var token = tokenString;
  
      if (!err) {
        this.setState({
          confirmPasswordFlag: false,
          confirmPasswordError: "",
          passwordFlag: false,
          passwordError: "",
          password: "",
          confirmPassword: "",
        });
        let resetPasswordData = {
          email: localStorage.getItem("email"),
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        };
        Services.resetPassword(resetPasswordData, token)
          .then((result) => {
            localStorage.removeItem("email");
            let obj = JSON.stringify(result);
            console.log("Password reset successful", obj);
            this.setState({
              snackType: "success",
              snackMessage: "Password reset successful",
              open: true,
              setOpen: true,
            });
  
            this.nextPath("../login");
          })
          .catch((error) => {
            console.log("Password reset Failed" + error);
            this.setState({
              snackType: "error",
              snackMessage: "Password reset Failed",
              open: true,
              setOpen: true,
            });
          });
      } else {
        console.log("Reset Failed");
      }
    };
  
    render() {
      return (
        <Grid className="display-center">
          <Paper elevation={8} className="paperStyle">
            <Grid align="center">
              <FundooHeader />
              <h2>Reset Password</h2>
              <h3>Use your Fundoo Account</h3>
            </Grid>
            <form className="Form" data-testid="form">
              <div className="inputField">
                <TextField
                  size="small"
                  className="tfStyle"
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="password"
                  fullWidth
                  data-testid="password"
                  value={this.state.password}
                  onChange={(e) => this.change(e)}
                  error={this.state.passwordFlag}
                  helperText={this.state.passwordError}
                />
              </div>
              <div className="inputField">
                <TextField
                  size="small"
                  label="Confirm password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  helperText={this.state.confirmPasswordError}
                  error={this.state.confirmPasswordFlag}
                  onChange={(e) => this.change(e)}
                />
              </div>
              <span className="buttonFooter1">
                <div>
                  <Button
                    variant="contained"
                    onClick={(e) => this.onSubmit(e)}
                    color="primary"
                    fullWidth
                  >
                    Set Password
                  </Button>
                </div>
              </span>
            </form>
          </Paper>
          <div>
            <Snackbar open={this.state.open} autoHideDuration={3000}>
              <Alert severity={this.state.snackType}>
                {this.state.snackMessage}
              </Alert>
            </Snackbar>
          </div>
        </Grid>
      );
    }
  }