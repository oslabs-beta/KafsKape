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
  let value1 = 0;
  let controllerColor = ''

  const metric2 = 'Under-replicated Partitions'
  let value2 = 0;
  let urpColor = ''
  
  const metric3 = 'Offline Partitions'
  let value3 = 0;
  let offlinePartitionColor = ''

  const [activeControllerArr, setActiveControllerArr] = useState([]);
  const [uRP, setURP] = useState([]);
  const [offlinePartitionsArr, setOfflinePartitionsArr] = useState([])

  // useEffect(() => {
  //   // identifies which controller in the cluster is the active controller
  //   let activeControllers = fetch(`http://localhost:${props.port}/api/v1/query?query=kafka_controller_kafkacontroller_activecontrollercount`
  //   ).then((respose) => respose.json());
  //   // returns the ammount of underreplicated partitions in each cluster
  //   let underReplicated = fetch(`http://localhost:${props.port}/api/v1/query?query=kafka_server_replicamanager_underreplicatedpartitions`
  //   ).then((response) => response.json());

  //   let offlinePartitions = fetch(`http://localhost:${props.port}/api/v1/query?query=kafka_controller_kafkacontroller_offlinepartitionscount`
  //   ).then((response) => response.json());
  // //creates an array of the different object that we have fetched  
  // Promise.all([activeControllers, underReplicated, offlinePartitions])
  //   .then((allData) => {
  //     // saves the array of which broker is a controller
  //     setActiveControllerArr(allData[0].data.result);
  //     //save the array of under replicated partitions
  //     setURP(allData[1].data.result);
  //     // saves the array of offline partitions
  //     setOfflinePartitionsArr(allData[2].data.result)
  //   },
  //   )}, []);

    // iterates through the Array and finds the controller and saves instance name
    activeControllerArr.forEach(ele => {
      if(ele.value[1] === '1'){
        value1 += 1;
        controllerName = ele.metric.instance
      }
    })
    
    if (value1 !== 1) {
      controllerColor = 'red'
    }

    // iterates through Array and sums up the qty of underreplicated partitions (not enough backups)
    uRP.forEach(ele=>{
      if(ele.value[1] !== '0'){
        value2 += Number(ele.value[1]);
      }

// modifies color of URP metrics if value is 1+
      if (value2 !== 0) {
        urpColor = 'red'
      }
    })
// iterates through Array and sums up the qty of  partitions without a Leader(not enough backups)
    offlinePartitionsArr.forEach(ele => {
      if(ele.value[1] === '0'){
        value3 += Number(ele.value[1])
      }

// modifies color of offlineParitions metrics if value is 1+
      if (value3 !== 0) {
        offlinePartitionColor = 'red'
      }
    })

    
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