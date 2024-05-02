import React, { useState, useEffect }  from "react";
import { connect } from 'react-redux';
import { Typography, Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
) 

const mapStateToProps = (state) => {
    return {
        port: state.mainReducer.port,
        connectionTime: state.mainReducer.connectionTime
    };
};


function BrokerFailedProdReqRate(props) {
    const BrokerFailedProdReqData =
    {
        "status": "success",
        "data": {
            "resultType": "matrix",
            "result": [
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_failedproducerequestspersec",
                        "env": "dev",
                        "instance": "kafka-1:1234",
                        "job": "kafka"
                    },
                    "values": [
                        [
                            1641446759.965,
                            // 1640997701.199,
                            "0"
                        ],
                        [
                            1641446767.965,
                            // 1640997709.199,
                            "0"
                        ],
                        [
                            1641446775.965,
                            // 1640997717.199,
                            "0"
                        ],
                        [
                            1641446783.965,
                            // 1640997725.199,
                            "0"
                        ],
                        [
                            1641446791.965,
                            // 1640997733.199,
                            "0"
                        ],
                        [
                            1641446799.965,
                            // 1640997741.199,
                            "0"
                        ],
                        [
                            1641446807.965,
                            // 1640997749.199,
                            "0"
                        ],
                        [
                            1641446815.965,
                            // 1640997757.199,
                            "0"
                        ],
                        [
                            1641446823.965,
                            // 1640997765.199,
                            "0"
                        ],
                        [
                            1641446831.965,
                            // 1640997773.199,
                            "0"
                        ],
                        [
                            1641446839.965,
                            // 1640997781.199,
                            "0"
                        ],
                        [
                            1641446847.965,
                            // 1640997789.199,
                            "0"
                        ],
                        // [
                        //     1640997797.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997805.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997813.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997821.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997829.199,
                        //     "0"
                        // ]
                    ]
                },
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_failedproducerequestspersec",
                        "env": "dev",
                        "instance": "kafka-2:1234",
                        "job": "kafka"
                    },
                    "values": [
                        [
                            1641446759.965,
                            // 1640997701.199,
                            "0"
                        ],
                        [
                            1641446767.965,
                            // 1640997709.199,
                            "0"
                        ],
                        [
                            1641446775.965,
                            // 1640997717.199,
                            "0"
                        ],
                        [
                            1641446783.965,
                            // 1640997725.199,
                            "0"
                        ],
                        [
                            1641446791.965,
                            // 1640997733.199,
                            "0"
                        ],
                        [
                            1641446799.965,
                            // 1640997741.199,
                            "0"
                        ],
                        [
                            1641446807.965,
                            // 1640997749.199,
                            "0"
                        ],
                        [
                            1641446815.965,
                            // 1640997757.199,
                            "0"
                        ],
                        [
                            1641446823.965,
                            // 1640997765.199,
                            "0"
                        ],
                        [
                            1641446831.965,
                            // 1640997773.199,
                            "0"
                        ],
                        [
                            1641446839.965,
                            // 1640997781.199,
                            "0"
                        ],
                        [
                            1641446847.965,
                            // 1640997789.199,
                            "0"
                        ],
                        // [
                        //     1640997797.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997805.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997813.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997821.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997829.199,
                        //     "0"
                        // ]
                    ]  // length of array is 17
                },
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_failedproducerequestspersec",
                        "env": "dev",
                        "instance": "kafka-3:1234",
                        "job": "kafka"
                    },
                    "values": [
                        [
                            1641446759.965,
                            // 1640997701.199,
                            "0"
                        ],
                        [
                            1641446767.965,
                            // 1640997709.199,
                            "0"
                        ],
                        [
                            1641446775.965,
                            // 1640997717.199,
                            "0"
                        ],
                        [
                            1641446783.965,
                            // 1640997725.199,
                            "0"
                        ],
                        [
                            1641446791.965,
                            // 1640997733.199,
                            "0"
                        ],
                        [
                            1641446799.965,
                            // 1640997741.199,
                            "0"
                        ],
                        [
                            1641446807.965,
                            // 1640997749.199,
                            "0"
                        ],
                        [
                            1641446815.965,
                            // 1640997757.199,
                            "0"
                        ],
                        [
                            1641446823.965,
                            // 1640997765.199,
                            "0"
                        ],
                        [
                            1641446831.965,
                            // 1640997773.199,
                            "0"
                        ],
                        [
                            1641446839.965,
                            // 1640997781.199,
                            "0"
                        ],
                        [
                            1641446847.965,
                            // 1640997789.199,
                            "0"
                        ],
                        // [
                        //     1640997797.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997805.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997813.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997821.199,
                        //     "0"
                        // ],
                        // [
                        //     1640997829.199,
                        //     "0"
                        // ]
                    ]
                }
            ]
        }
    }

    const xTimeData = [];

    // fills x array with the timestamps for each piece of data
    BrokerFailedProdReqData.data.result[0].values.forEach(ele => {
        const humanReadableDate = new Date(ele[0] * 1000)
        // console.log(humanReadableDate)
        xTimeData.push(humanReadableDate.toLocaleDateString('en-US'))
        // xTimeData.push(humanReadableDate.toLocaleString('en-US'))
    });

    
    
    // each ele in the for each loop is an object fo each broker within the result array
    // define array to push
    const result = [];
    const brokerNames = [];
    const yFetchDataSet = [];
    const brokerValues = [];

    BrokerFailedProdReqData.data.result.map(ele => {
        // this will add the instance as the first element in result array
        brokerNames.push(ele.metric.instance);

        // on each ele object there are two properties
        // property value on key name values, is an array of arrays
        // adds all the values to result array
        brokerValues.push(ele.values)

        // // push result array to the fetch data
        // // result array of arrays to interate through
        // yFetchDataSet.push(result);
    });
    
    console.log('broker values', brokerValues)

    for (let i = 0; i < brokerValues.length; i++) {
        let secondary = [];
        brokerValues[i].forEach(ele => secondary.push(Number(ele[1])));
        yFetchDataSet.push(secondary);
    };

    console.log('x data', xTimeData)
    // console.log('y data', yFetchDataSet)
    
    const chartData = {
        labels: [...xTimeData],
        datasets: []
    }

    console.log('broker names', brokerNames)


    //  auto color generation
    function randomColorGenerator() {
        const r = Math.ceil(Math.random() * 255);
        const g = Math.ceil(Math.random() * 255);
        const b = Math.ceil(Math.random() * 255);
        // const a = Math.floor(Math.random() * 1);

        const randomColors = [];
        console.log(`rgba(${r},${g},${b},1)`)
        randomColors.push(`rgba(${r},${g},${b},1)`)
        return randomColors
    }

    for (let i = 0; i < yFetchDataSet.length ; i++) {
        chartData.datasets.push({
            label: brokerNames[i],
            data: yFetchDataSet[i],
            fill: false,
            // backgroundColor: 'blue',
            borderColor: randomColorGenerator()
        })
    }

    console.log('y data', yFetchDataSet)

    // iterate through each array to build out graph
    return (
        <div>
            <Typography 
                variant='h5'
                style ={{textAlign: 'center'}}
            >
                Failed Producer Requests
            </Typography>
            <Paper style={{height:"500px", width:"1000px"}}>
                <Chart type='line' data={ chartData } />
            </Paper>
        </div>
    );
}



export default BrokerFailedProdReqRate;