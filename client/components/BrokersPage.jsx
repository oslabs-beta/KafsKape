import React, { useState } from 'react';
import TopBannerContainer from './TopBannerContainer.jsx'
import BrokerColumnContainer from './BrokerColumnContainer.jsx';
import BrokerGraphContainer from './BrokerGraphContainer.jsx';
import BrokerFailedProdReqRate from './BrokerFailedProdReq.jsx';
import BrokerTotalFetchReqRate from './BrokerTotalFetchReq.jsx';
import { Box, Grid } from '@material-ui/core';
import { style } from '@mui/system';
import { makeStyles } from '@mui/styles';

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




export default function BrokersPage() {
  const classes = useStyles();

  return(
    <>
      <div
        className={classes.root} 
        style={{ minHeight: '100vh' }}
        /* style = {{ backgroundImage: 'linear-gradient(to top right, #66a6ff, #89f7fe)' }} */
      >
        <TopBannerContainer topBannerContainerTitle="Brokers Overview"/>
        <Box >
          <Grid container spacing={2} className={classes.graph}>
            <Grid item className={classes.paper}>
              <BrokerTotalFetchReqRate/>
            </Grid>
            <Grid item className={classes.paper}>
              <BrokerFailedProdReqRate/>
            </Grid>
          </Grid>
        </Box>
        
        
        
        
        
        {/* <Box 
          sx={{ flexGrow: 1 }}
          // style = {{
          //   display:'flex', 
          //   flexDirection: 'row', 
          //   justifyContent: 'center'
          // }}
        >
          <Grid 
            container 
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
          >
            <Grid container item spacing={2} > 
              <BrokerGraphContainer />
            </Grid>
          </Grid>
        </Box> */}
      </div>
    </>
  )
  // was in grid item
  // style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}
}