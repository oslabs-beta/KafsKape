import React, { useState, useEffect }from 'react';
import { Typography, Grid, Card, CardContent, Divider } from '@material-ui/core';
import { Box } from '@mui/system';
import { connect } from 'react-redux';

// import state saved from login
const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port
  };
};

const CriticalMetrics = (props) => {  
  const metric1 = 'Active Controller(s)'
  let controllerName = '';
  let controllerColor = '';
  const [value1, setValue1] = useState([]);

  const metric2 = 'Under-replicated Partitions'
  let urpColor = ''
  const [value2, setValue2] = useState([]);
  
  const metric3 = 'Offline Partitions'
  let offlinePartitionColor = '';
  const [value3, setValue3] = useState([]);

  // fetch data from Express Server
  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/active-controller-count"),
      fetch("http://localhost:5000/urp-count"),
      fetch("http://localhost:5000/offline-partition-count"),
    ])
    .then(([resActiveControllerCount, resURPCount, resOfflinePartitionCount]) =>
      Promise.all([resActiveControllerCount.json(), resURPCount.json(), resOfflinePartitionCount.json()])
      )
        .then(([dataActiveControllerCount, dataURPCount, dataOfflinePartitionCount]) => {
          setValue1(dataActiveControllerCount[metric1]);
          setValue2(dataURPCount[metric2])
          setValue3(dataOfflinePartitionCount[metric3]);
        }); 
  }, []);

  // modifies color of Active Controller metrics if value is not 1
  if (value1 !== 1) {
    controllerColor = 'red'
  }

  // modifies color of URP metrics if value is 1+
  if (value2 !== 0) {
    urpColor = 'red'
  }

 // modifies color of offlineParitions metrics if value is 1+
  if (value3 !== 0) {
    offlinePartitionColor = 'red'
  }
    
  return (
  <Box>
    <Grid container alignItems="stretch">
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{backgroundColor : controllerColor}}>
          <Typography sx={{ fontSize: 20 }} color="textSecondary" gutterBottom>
            {/* Checking value =  */}
            { metric1 }
          </Typography>
          <Divider/>
          <Typography style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}} sx={{fontSize:14 }}>
            { controllerName }
          </Typography>
          <Typography style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}} >
            { value1 }
          </Typography>
        </CardContent>
      </Card>
        
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{backgroundColor : urpColor}}>
          <Typography sx={{ fontSize: 20 }} color="textSecondary" gutterBottom>
            { metric2 }
          </Typography>
          <Divider/>
          <Typography style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}} sx={{fontSize:14}}>
            { value2 }
          </Typography>
        </CardContent>
      </Card>

        <Card sx={{ minWidth: 275 }}>
        <CardContent style={{backgroundColor : offlinePartitionColor}}>
          <Typography sx={{ fontSize: 20 }} color="textSecondary" gutterBottom>
            { metric3 }
          </Typography>
          <Divider/>
          <Typography style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}} sx={{fontSize:14}}>
            { value3 }
          </Typography>
        </CardContent>
      </Card>    
    </Grid>
  </Box>    
  )
}
export default connect(mapStateToProps, null)(CriticalMetrics);