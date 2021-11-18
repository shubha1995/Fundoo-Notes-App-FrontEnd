import React from "react";
import Services from "../../Services/NotesServices.js";
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import "./ResetPassword.scss";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

const ResetPassword = () => {

  const initialValues = {
    password: "",
    confirmPassword:"",
  };
  const history = useHistory();

  const onSubmits = (values, props) => {
    Services(values)
      .then((res) => {
        setTimeout(() => {
          props.resetForm();
          history.push("../login");
        }, 2000);
        toast.success("Password Reset Succesfully ", {
          autoClose: 2000,
        });
      })
      .catch((error) => {
         console.log(error);
         toast.error("Password Reset is Not Done", {
          autoClose: 2000,
        });
      });
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password Required"),
      confirmPassword: Yup.string()
      .required("ConfirmPassword Required"),
  });
  return (
    <Grid className="display-center">
      <Paper elevation={8} className="paperStyles">
        <Grid align="center">
          <FundooHeader />
          <h3 className="fontDesign" data-testid="header1">Reset password</h3>
          <h4 className="fontDesign" data-testid="header2">Use your Fundoo Account</h4>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmits}
        >
          {(props) => (
            <Form >
              <Field
                as={TextField}   label="Password"  name="password"  variant="outlined"  fullWidth className="tfStyle"  helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}   label="ConfirmPassword"  name="confirmPassword"  variant="outlined"  fullWidth className="tfStyle"  helperText={<ErrorMessage name="confirmPassword" />}
              />
              <Grid container className="buttonStyle1" >
                <Button  type="submit"  color="primary"  variant="contained"  fullWidth>  Next</Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
      <ToastContainer />
    </Grid>
  );
};
export default ResetPassword;