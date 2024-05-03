// import React, { useState }  from "react";
// // import { Line } from "react-chartjs-2";
// import { useEffect } from "react";
// // import {CategoryScale, Chart} from 'chart.js'; 
// // Chart.register(CategoryScale) 

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

// const ConsumerBarDummyData = () => {
//   // const [chartData, setChartData] = useState({});


//   // const data = () => {
//   //   setChartData({
//   //     labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
//   //     datasets: [
//   //       {
//   //         label: 'bytes',
//   //         data:[10, 11, 12, 13, 14, 15],
//   //         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//   //         borderColor:'rgba(75, 192, 192, 1)',
//   //         borderWidth: 4

//   //       }
//   //     ]
//   //   })
//   // }

//   // useEffect(() => {
//   //   data()
//   // }, [])


//   return (
//     <div>
//         <h3 style ={{textAlign : 'center'}}>Total Records Consumed</h3>
//         <div style={{height:"300px", width:"300px"}}>
//         <Bar type='bar' data={{
//             labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
//             datasets: [
//                 {
//                     label: 'Total Records Consumed',
//                     data:[70, 85, 110, 123, 156, 165],
//                     backgroundColor: 'rgba(75, 192, 192, 0.6)',
//                     borderColor:'rgba(75, 192, 192, 1)',
//                     borderWidth: 4,
//                     barPercentage:0.9
//                 }
//             ]
//             }}

//             options={{
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ConsumerBarDummyData;