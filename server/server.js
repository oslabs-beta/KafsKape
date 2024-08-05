// API for Critical Metrics
const express = require('express')
const app = express()

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

const activeControllerArr = [];
const uRP = [];
const offlinePartitionsArr = [];

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
    for (i in activeControllerArr){
        if (i.value[1] === '1'){
            value1 += 1;
            controllerName = ele.metric.instance
        }
    }

    // iterates through Array and sums up the qty of underreplicated partitions (not enough backups)
    for (i in uRP){
        if(i.value[1] !== '0'){
            value2 += Number(i.value[1]);
        }
    }

  for (i in offlinePartitionsArr){
    if(i.value[1] === '0'){
        value3 += Number(i.value[1])
    }  
  }
 
app.get("/active-controller-count", (req, res) => {
    res.json({[metric1]: value1})
})

app.get("/urp-count", (req, res) => {
    res.json({[metric2]: value2})
})

app.get("/offline-partition-count", (req, res) => {
    res.json({[metric3]: value3})
})

app.listen(5000, () => {console.log("Server started on port 5000")})
