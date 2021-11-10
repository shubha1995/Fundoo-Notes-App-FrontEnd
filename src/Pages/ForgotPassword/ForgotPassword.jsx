import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../ForgotPassword/ForgotPassword.scss";
import FundooHeader from '../../Components/FundooHeader/FundooHeader';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgot } from "../../Services/User.js";

const ForgotPassword = () => {
  const initialValues = {
    emailId: "",
  };

  const history = useHistory();

  const onSubmits = (values, props) => {
    console.log(values);
    const data = {
      email: values.emailId,
    };
    forgot(data)
      .then((res) => {
        // alert("Data submitted");
        setTimeout(() => {
          props.resetForm();
          history.push("#");
        }, 2000);
        toast.success("emailId forgot password link sent succesfully", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((error) => {
         console.log(error);
         toast.error("Please enter valid email id", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  const validationSchema = Yup.object().shape({
    emailId: Yup.string()
      .email("Please Enter valid emailId !!")
      .required("emailId is required !!"),
  });
  return (
    <Grid className="display-center">
      <Paper elevation={8} className="paperStyleFP">
        <Grid align="center">
          <FundooHeader />
          <h3 className="fontDesign">Find your emailId</h3>
          <h4 className="fontDesign">Enter your recovery emailId</h4>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmits}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="emailId"
                name="emailId"
                variant="outlined"
                fullWidth
                className="tfStyle"
                helperText={<ErrorMessage name="emailId" />}
              />
              <Grid container className="buttonStyle1" sm={12}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Next
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
      <ToastContainer />
    </Grid>
  );
};

export default ForgotPassword; 