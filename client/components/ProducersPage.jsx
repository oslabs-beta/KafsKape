import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import { Box, Grid } from '@material-ui/core';
import ProducerResponseRate from './ProducerResponeRate.jsx';
import ProducerRequestRate from './ProducerRequestRate.jsx';
import ProducerRequestTotal from './ProducerRequestTotal.jsx';
import styles from './SubPage.module.css'

export default function ProducersPage(){
  return (
    <div className={styles.root}>
      <TopBannerContainer topBannerContainerTitle="Producers Overview"/>
      <Box >
          <Grid container spacing={2} className={styles.graph}>
            <Grid item className={styles.paper}>
              <ProducerResponseRate />
            </Grid>
            <Grid item className={styles.paper}>
              <ProducerRequestRate />
            </Grid>
            <Grid item className={styles.paper}>
              <ProducerRequestTotal />
            </Grid>
          </Grid>
      </Box>
    </div>
  )
}