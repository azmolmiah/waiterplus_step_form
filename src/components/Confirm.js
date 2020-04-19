import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

const Confirm = ({ nextStep, prevStep, values }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const {
    firstName,
    lastName,
    email,
    phone,
    restaurantName,
    restaurantAddress,
    restaurantPhone,
    restaurantBio,
  } = values;
  return (
    <Fragment>
      <AppBar position="static">
        <h1>Waiterplus</h1>
      </AppBar>

      <h2 style={{ marginTop: "1em" }}>Confirm details</h2>
      <Container maxWidth="sm">
        <Grid justify="center">
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phone Number" secondary={phone} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Restaurant Name"
                secondary={restaurantName}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Restaurant Address"
                secondary={restaurantAddress}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Restaurant Phone"
                secondary={restaurantPhone}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Restaurant Bio"
                secondary={restaurantBio}
              />
            </ListItem>
          </List>
        </Grid>
      </Container>

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
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Confirm;
