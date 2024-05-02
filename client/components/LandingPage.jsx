import React, { Component } from 'react';
import PortEntry from './PortEntry.jsx';
import PortEntryError from "./PortEntryError.jsx";
import GetLogo from "./GetLogo.jsx";
import styles from "./LandingPage.module.css"
import BottomBanner from "./BottomBanner.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    portError: state.mainReducer.portError,
  };
};

const LandingPage = ({ portError }) => {
  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <GetLogo />
      </div>
      {portError && <PortEntryError />}
      <PortEntry />
      <BottomBanner />
    </div>
  );
};

export default connect(mapStateToProps)(LandingPage);