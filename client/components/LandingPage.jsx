import React, { Component } from 'react';
import PortEntry from './PortEntry.jsx';
import PortEntryError from "./PortEntryError.jsx";
import GetLogo from "./GetLogo.jsx";
import BottomBanner from "./BottomBanner.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    portError: state.mainReducer.portError,
  };
};

const LandingPage = ({ portError }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: "linear-gradient(to bottom left, #66a6ff, #89f7fe)",
      }}
    >
      <div
        style={{ marginTop: "15vh", display: "flex", justifyContent: "center" }}
      >
        <GetLogo />
      </div>
      {portError && (
        <div>
          <PortEntryError />
        </div>
      )}
      <div>
        <PortEntry />
      </div>
      <div>
        <BottomBanner />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(LandingPage);