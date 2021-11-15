import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ForgotPassword.scss";
import Services from "../../Services/NotesServices.js";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import { Grid, Paper } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

function Alert(props) {
  return <MuiAlert variant="filled" {...props} />;
}

export default class Hello extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      emailFlag: false,
      setOpen: false,
      open: false,
      snackMessage: "",
      snackType: "",
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      emailFlag: false,
    };
    if (this.state.email.length === 0) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Enter your Email ";
    }
    if (
      !/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/.test(
        this.state.email
      )
    ) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Email is not proper";
    }
    this.setState({
      ...errors,
    });

    return isError;
  };

  onSubmit = (e, props) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        emailFlag: false,
        emailError: "",
        email: "",
      });
      let data = {
        email: this.state.email,
      };
      localStorage.setItem("email", this.state.email);
      Services.forgotPassword(data)
        .then((data) => {
          let obj = JSON.stringify(data);
          console.log("Mail Sended to given email" + obj);
          this.setState({
            snackType: "success",
            snackMessage: "Mail Sended to given email",
            open: true,
            setOpen: true,
          });
        })
        .catch((err) => {
          this.setState({
            snackType: "error",
            snackMessage: "Request Failed",
            open: true,
            setOpen: true,
          });
        });
    } else {
      console.log("Request Failed");
    }

    // props.resetForm();
  };

  render() {
    return (
      <Router>
        <Grid className="display-center">
          <Paper elevation={8} className="paperStyleFP">
            <Grid align="center">
              <FundooHeader  />
              <h3 className="fontDesign" data-testid="header1">
                Find your email
              </h3>
              <h4 className="fontDesign" data-testid="header2">
                Enter your recovery email
              </h4>
            </Grid>
            <form data-testid="form">
              <Grid>
                <TextField
                  className="tfStyle"
                  label="Email"
                  data-testid="email"
                  variant="outlined"
                  name="email"
                  fullWidth
                  value={this.state.email}
                  helperText={this.state.emailError}
                  error={this.state.emailFlag}
                  onChange={(e) => this.change(e)}
                />
              </Grid>
              <Grid container spacing={0}>
                <Grid sm={6}>
                  <p className='buttonStyle11 '>
                <Button className="textDecoration" href='/login' 
                 variant = 'text'>sign in instead ?</Button>
              </p>
                </Grid>
                <Grid container className="buttonStyle1" sm={6}>
                  <Button
                    variant="contained"
                    onClick={(e) => this.onSubmit(e)}
                    color="primary"
                    fullWidth
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
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
      </Router>
    );
  }
}