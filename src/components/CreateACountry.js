import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CreateACountry = props => {
  const useStyles = makeStyles({
    root: {
      width: "80%",
      overflowX: "auto",
      margin: "5%",
      display: "flex",
      flexDirection: "column"
    },
    form: {
      width: "65%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    headline: {
      margin: "2%",
      paddingTop: "2%"
    },
    input: {
      padding: "2%",
      margin: "2%"
    },
    button: {
      margin: "2%",
      width: "30%",
      padding: "2%"
    }
  });

  const classes = useStyles();

  // const handleChanges = event => {
  //   setCountry({ ...country, [event.target.name]: event.target.value });
  // };

  // const submitForm = event => {
  //   event.preventDefault();
  //   handleChanges(country);
  //   setCountry({ countryName: "" });
  // };

  // onSubmit={submitForm}          onChange={handleChanges}

  return (
    <Paper className={classes.root}>
      <h1 className={classes.headline}>Create A Country</h1>
      <Form className={classes.form}>
        <Field
          as={TextField}
          className={classes.input}
          required
          label="Country Name"
          type="text"
          name="country"
          variant="outlined"
        />
        <Button className={classes.button} type="submit" variant="contained">
          Create Country
        </Button>
      </Form>
    </Paper>
  );
};

const FormikCreateACountry = withFormik({
  mapPropsToValues({ country }) {
    return {
      country: country || ""
    };
  },

  validationSchema: Yup.object().shape({
    country: Yup.string().required()
  }),

  handleSubmit(values, { setStatus, resetForm, props }) {
    console.log(props);
    axios
      .post("http://localhost:5000/api/createcountry", values)
      .then(response => {
        console.log(response.data);
        setStatus(response.data);
        resetForm();
      })
      .catch(error => {
        console.log(error.response);
      });
  }
})(CreateACountry);

export default FormikCreateACountry;
