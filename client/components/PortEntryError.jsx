import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

function PortEntryError(props) {
  return (
    //TODO take this CSS out
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Alert variant="filled" severity="error" style={{ maxWidth: "25vw" }}>
        <AlertTitle>Connection Error</AlertTitle>
        Missing port and/or port connection failed —{" "}
        <strong>please try again</strong>
      </Alert>
    </div>
  );
}

export default PortEntryError;
