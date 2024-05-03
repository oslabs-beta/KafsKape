// import React, { useState, useEffect} from 'react';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import { Button } from '@mui/material';

// const Item = styled(Button)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   display: 'flex',
//   alignItems: 'flex-start',
//   color: theme.palette.text.secondary,
//   height: '25vh',
//   borderTop: '1px solid blue',
//   borderBottom: '1px solid blue'
// }));

// export default function BrokerColumnContainer(props){

//   // Fetch active controller count to receive object of all Brokers in cluster
//   const [totalBrokerCount, setTotalBrokerCount] = useState([]);

//   // Purgatory Size - helps identify latency issues.  Purgatory is a placeholder for 
//   // both produce and fetch reqs and the more reqs added to Purgatory the greater the 
//   // delay in processing those reqs
//   const [purgatorySize, setPurgatorySize] = useState([])

//   useEffect(() => {
//     let totalBrokers = fetch(
//       `http://localhost:${props.port}/api/v1/query?query=kafka_controller_kafkacontroller_activecontrollercount`
//     ).then((response) => response.json());

//     Promise.all([totalBrokers])
//       .then((fetchReqData) => {
//         setTotalBrokerCount(fetchReqData[0].data.result.length - 1)
//       })

//   },[])

//   return(
//   <div style = {{
//     textAlign: 'center',
//     height : '90vh', 
//     width: '100%',
//     border: '2px solid blue'}}>
//     <h3>Broker(s)</h3>
//       <Stack direction="column">
//         <Item>
//         <br></br>
//         <br></br>
//         Total Messages Sent : 800
//         <br></br>
//         Record(s) Read per Second : 15      
//         </Item>
//         <Item>Broker 2
//         <br></br>
//         <br></br>
//         Total Messages Sent : 659
//         <br></br>
//         Record(s) Read per Second : 12  
//         </Item>
//       </Stack>
//     </div>
//   )
// }