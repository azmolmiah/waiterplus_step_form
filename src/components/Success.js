import React, { Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";

const Success = () => {
  return (
    <Fragment>
      <Dialog open={true} fullWidth={true} maxWidth="sm">
        <div style={{ textAlign: "center" }}>
          <h3>Thank You For Your Submission</h3>
          <p>You will get an email with further instructions</p>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default Success;
