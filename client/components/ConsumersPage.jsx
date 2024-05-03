import React, { useState } from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ConsumerGraphContainer from './ConsumerGraphContainer.jsx';
import ConsumerColumnContainer from './ConsumersColumnContainer.jsx';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import ConsumerMakeLineChart from './ConsumerLineChart.jsx'
import ConsumerFailedRebalanceTotal from './ConsumerFailedRebalanceTotal.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(to top right, #66a6ff, #89f7fe)',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexGrow: '1',
    alignItems: 'center',
    alignContent: 'flex-start'
  },
  graph: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexGrow: '1',
    alignItems: 'center',
    alignContent: 'flex-start'
  },
  paper: {
    textAlign: 'center',
    minHeight: '200px'
  },
}));



export default function ConsumersPage() {
  const classes = useStyles();
  return(
    <div 
      className={classes.root} 
      style={{ minHeight: '100vh' }}
      >

      <TopBannerContainer topBannerContainerTitle="Consumers Overview"/>
        <Box >
        <Grid container spacing={2} className={classes.graph}>
          <Grid item className={classes.paper}>
            <ConsumerMakeLineChart />
          </Grid>
          <Grid item className={classes.paper}>
            <ConsumerFailedRebalanceTotal />
          </Grid>         
        </Grid>
      </Box>
        
    </div>
  )
}