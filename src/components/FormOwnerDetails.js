import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const { firstName, lastName, email } = values;

  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Fragment>
      <AppBar position="static">
        <h1>Signup Form</h1>
      </AppBar>

      <h2 style={{ marginTop: "1em" }}>Owner details</h2>

      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item lg={3}>
          <TextField
            required
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={firstName}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item lg={3}>
          <TextField
            required
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={lastName}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item lg={3}>
          <TextField
            required
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange("email")}
            defaultValue={email}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <br />
      <br />
      <Grid container justify="center">
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={continueToNextStep}
            fullWidth={true}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FormUserDetails;
