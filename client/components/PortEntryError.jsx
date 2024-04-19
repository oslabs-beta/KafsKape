import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

function PortEntryError(props) {
  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     backgroundImage: "linear-gradient(to bottom left, #66a6ff, #89f7fe)",
    //   }}
    // >
    //   <div
    //     style={{ marginTop: "15vh", display: "flex", justifyContent: "center" }}
    //   >
    //     <GetLogo />
    //   </div>
    //TODO take this CSS out
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Alert variant="filled" severity="error" style={{ maxWidth: "25vw" }}>
        <AlertTitle>Connection Error</AlertTitle>
        Missing port and/or port connection failed —{" "}
        <strong>please try again</strong>
      </Alert>
    </div>
    // <div><PortEntry /></div>
    // <div><BottomBanner /></div>
    // </div>
  );
}

export default PortEntryError;
