import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Typography, Button } from '@material-ui/core';
import {
  addPortAction,
  addConnectionTimeAction,
  portErrorAction,
} from "../actions/action.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port,
    portError: state.mainReducer.portError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPortAction: (userInput) => {
      dispatch(addPortAction(userInput));
    },
    addConnectionTimeAction: (timestamp) => {
      dispatch(addConnectionTimeAction(timestamp));
    },
    portErrorAction: (error) => {
      dispatch(portErrorAction(error));
    },
  };
};

const verifyPort = async (port) => {
  let valid;
  port === "3000" ? (valid = true) : (valid = false);

  // const url = `http://localhost:${port}/api/v1/query?query=up`;
  // await fetch(url)
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data.status === 'success') valid = true;
  //   })
  //   .catch(err => console.log(err));
  return valid;
};

function PortEntry(props) {
  const [port, setPort] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userPort = document.getElementById("prometheus").value;
    const verified = await verifyPort(userPort);
    const timestamp = new Date().toISOString();
    if (verified) {
      props.addPortAction(userPort);
      props.addConnectionTimeAction(timestamp);
      if (props.portError) {
        props.portErrorAction(false);
      }
      navigate("/dashboard");
    } else if (!verified) {
      props.portErrorAction(true);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Typography variant="h6" color="primary" gutterBottom>
        Enter the Prometheus port your Kafka instance is located on:
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setPort(e.target.value)}
          id="prometheus"
          variant="outlined"
          label="Enter port here..."
          size="small"
          style={{ marginBottom: "1em" }}
        />
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" color="primary" variant="contained">
            Connect Cluster
          </Button>
        </Box>
      </form>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PortEntry);