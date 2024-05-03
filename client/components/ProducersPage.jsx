import React, { useState } from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ProducerGraphContainer from './ProducerGraphContainer.jsx';
import ProducerColumnContainer from './ProducersColumnContainer.jsx';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import MakeResponseRateGraph from './ProducerResponeRate.jsx';
import MakeRequestRateGraph from './ProducerRequestRate.jsx';
import MakeRequestTotalGraph from './ProducerRequestTotal.jsx';

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

export default function ProducersPage(){
  const classes = useStyles();

  return(
    <div 
      className={classes.root} 
      style={{ minHeight: '100vh' }}
      // style = {{backgroundImage: 'linear-gradient(to top right, #66a6ff, #89f7fe)'}}
    >
      <TopBannerContainer topBannerContainerTitle="Producers Overview"/>
      <Box >
          <Grid container spacing={2} className={classes.graph}>
            <Grid item className={classes.paper}>
              <MakeResponseRateGraph />
            </Grid>
            <Grid item className={classes.paper}>
              <MakeRequestRateGraph />
            </Grid>
            <Grid item className={classes.paper}>
              <MakeRequestTotalGraph />
            </Grid>
          </Grid>
        </Box>

      {/* <Box 
        style = {{
          display:'flex', 
          flexDirection: 'row', 
          justifyContent: 'center'
        }}
      >
        <Grid>
          <Grid item xs={9} style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <ProducerGraphContainer />
          </Grid>
        </Grid>
      </Box>   */}
    </div>
  )
}