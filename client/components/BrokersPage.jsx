import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx'
import BrokerFailedProdReqRate from './BrokerFailedProdReq.jsx';
import BrokerTotalFetchReqRate from './BrokerTotalFetchReq.jsx';
import { Box, Grid } from '@material-ui/core';
import styles from './SubPage.module.css';

export default function BrokersPage() {
  return(
    <>
      <div className={styles.root}>
        <TopBannerContainer topBannerContainerTitle="Brokers Overview"/>
        <Box >
          <Grid container spacing={2} className={styles.graph}>
            <Grid item className={styles.paper}>
              <BrokerTotalFetchReqRate/>
            </Grid>
            <Grid item className={styles.paper}>
              <BrokerFailedProdReqRate/>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}