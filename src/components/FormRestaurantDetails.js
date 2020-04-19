import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import InfoIcon from "@material-ui/icons/Info";

const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {
  const {
    restaurantName,
    restaurantLocation,
    restaurantPhone,
    restaurantBio,
  } = values;

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
        <h1>Waiterplus</h1>
      </AppBar>

      <h2 style={{ marginTop: "1em" }}>Restaurant details</h2>

      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <StorefrontIcon />
        </Grid>
        <Grid item lg={3}>
          <TextField
            required
            placeholder="Enter Restaurant Name"
            label="Restaurant Name"
            onChange={handleChange("restaurantName")}
            defaultValue={restaurantName}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <LocationOnIcon />
        </Grid>
        <Grid item lg={3}>
          <TextField
            required
            placeholder="Enter Restaurant Location"
            label="Restaurant Location"
            onChange={handleChange("restaurantLocation")}
            defaultValue={restaurantLocation}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <LocalPhoneIcon />
        </Grid>
        <Grid item lg={3}>
          <TextField
            required
            placeholder="Enter Restaurant Phone"
            label="Restaurant Phone"
            onChange={handleChange("restaurantPhone")}
            defaultValue={restaurantPhone}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center" alignItems="flex-end">
        <Grid item>
          <InfoIcon />
        </Grid>
        <Grid item lg={3}>
          <TextField
            required
            placeholder="Enter Restaurant Bio"
            label="Restaurant Bio"
            onChange={handleChange("restaurantBio")}
            defaultValue={restaurantBio}
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
