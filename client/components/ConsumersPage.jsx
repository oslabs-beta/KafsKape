import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import { Box, Grid } from '@material-ui/core';
import ConsumerLineChart from './ConsumerLineChart.jsx'
import ConsumerFailedRebalanceTotal from './ConsumerFailedRebalanceTotal.jsx'
import styles from './SubPage.module.css'

export default function ConsumersPage() {
  return (
    <div className={styles.root}>
      <TopBannerContainer topBannerContainerTitle="Consumers Overview"/>
      <Box >
        <Grid container spacing={2} className={styles.graph}>
          <Grid item className={styles.paper}>
            <ConsumerLineChart />
          </Grid> 
          <Grid item className={styles.paper}>
            <ConsumerFailedRebalanceTotal />
          </Grid>         
        </Grid>
      </Box>
    </div>
  )
}