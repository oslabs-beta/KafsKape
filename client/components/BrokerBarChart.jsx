// import React, { useState }  from "react";
// import { useEffect } from "react";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function BrokerBarChart() {

//   return (
//     <div>
//       <h3 style ={{textAlign : 'center'}}>Total Records Written</h3>
//       <div style={{height:"300px", width:"300px"}}>
//         <Bar type='bar' data={ {
//           labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
//           datasets: [
//             {
//               label: 'Total Records Written',
//               data:[100, 200, 300 , 400, 500, 600, 700, 800],
//               backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               borderColor:'rgba(75, 192, 192, 1)',
//               borderWidth: 4,
//               barPercentage:0.9
//             }
//           ]}} 
//           height="300px"
//           width="300px"
//           options={{scales: { y: { beginAtZero: true }}}}
//         />
//       </div>
//     </div>
//   );
// };