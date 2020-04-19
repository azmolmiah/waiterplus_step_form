import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {
  const { occupation, city, bio } = values;

  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Fragment>
      <AppBar position="static">
        <h1>Signup Form</h1>
      </AppBar>

      <h2 style={{ marginTop: "1em" }}>Restaurant details</h2>

      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item lg={3}>
          <TextField
            required
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={occupation}
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
            placeholder="Enter Your City"
            label="City"
            onChange={handleChange("city")}
            defaultValue={city}
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
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={handleChange("bio")}
            defaultValue={bio}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <br />
      <br />
      <Grid container spacing={1} justify="center">
        <Grid item>
          <Button color="secondary" variant="contained" onClick={back}>
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={continueToNextStep}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FormPersonalDetails;
