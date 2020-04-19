import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const Success = () => {
  return (
    <Fragment>
      <Dialog open={true} fullWidth={true} maxWidth="sm">
        <div style={{ textAlign: "center", margin: "1rem" }}>
          <AppBar position="static">
            <h4>Waiterplus</h4>
          </AppBar>
          <br />
          <h3>Thank You For Your Submission</h3>
          <p>You will get an email with further instructions</p>
          <br />
          <Button color="primary" variant="contained">
            Home
          </Button>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default Success;
