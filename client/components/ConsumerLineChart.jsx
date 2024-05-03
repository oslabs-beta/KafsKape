import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
  import { Paper, Grid, Typography } from "@material-ui/core";
 
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


//Hard-coded data object for testing purposes employed; cross-checked request body from Prometheus tests

const ConsumerLineChart = () => {

  const obj = {
    "status": "success",
    "data": {
        "resultType": "matrix",
        "result": [
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-simple-consumer-1",
                    "env": "dev",
                    "instance": "consumer-1:1234",
                    "job": "consumer"
                },
                "values": [
                    [
                        1641446759.965,
                        "49763"
                    ],
                    [
                        1641446767.965,
                        "49763"
                    ],
                    [
                        1641446775.965,
                        "49778"
                    ],
                    [
                        1641446783.965,
                        "49778"
                    ],
                    [
                        1641446791.965,
                        "49793"
                    ],
                    [
                        1641446799.965,
                        "49793"
                    ],
                    [
                        1641446807.965,
                        "49808"
                    ],
                    [
                        1641446815.965,
                        "49808"
                    ],
                    [
                        1641446823.965,
                        "49823"
                    ],
                    [
                        1641446831.965,
                        "49823"
                    ],
                    [
                        1641446839.965,
                        "49838"
                    ],
                    [
                        1641446847.965,
                        "49853"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-simple-consumer-2",
                    "env": "dev",
                    "instance": "consumer:1234",
                    "job": "consumer"
                },
                "values": [
                    [
                        1641446759.965,
                        "49760"
                    ],
                    [
                        1641446767.965,
                        "49760"
                    ],
                    [
                        1641446775.965,
                        "49775"
                    ],
                    [
                        1641446783.965,
                        "49775"
                    ],
                    [
                        1641446791.965,
                        "49790"
                    ],
                    [
                        1641446799.965,
                        "49805"
                    ],
                    [
                        1641446807.965,
                        "49805"
                    ],
                    [
                        1641446815.965,
                        "49820"
                    ],
                    [
                        1641446823.965,
                        "49820"
                    ],
                    [
                        1641446831.965,
                        "49835"
                    ],
                    [
                        1641446839.965,
                        "49835"
                    ],
                    [
                        1641446847.965,
                        "49850"
                    ]
                ]
            }
        ]
    }
}
 
  let xAxis = [];
  let yObjects = [];
  let consumerValues = [];
  const consumerNames = [];

 /* FETCH REQUEST FOR DYNAMIC DATA
  fetch(`http://localhost:${props.port}/api/v1/query_range?query=kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total&start=${props.connectionTime}&end=${new Date().toISOString()}&step=30s`)
  .then((response) => response.json())  
  .then((res) => {
      xAxis = res.data.result[0].values.map(el => {
            let date = new Date(el[0]*1000);
            return date.toLocaleTimeString('en-US');
            });

    res.data.result.map(el => {if(el.metric.job === 'consumer') yObjects.push(el.values);});
    for(let i=0; i<yObjects.length; i++){
      let secondary = [];
	    yObjects[i].forEach(el => secondary.push(Number(el[1])));
      consumerValues.push(secondary);
      };
    }
  )
  .catch(err => console.log(err));
  */

    xAxis = obj.data.result[0].values.map(el => {
        let date = new Date(el[0]*1000);
        return date.toLocaleDateString('en-US');
        // return date.toLocaleString('en-US');
    });

    obj.data.result.map(el => {
        if(el.metric.job === 'consumer') {
            yObjects.push(el.values);
            consumerNames.push(el.metric.client_id)
        }
    });
  
    for(let i=0; i<yObjects.length; i++){
        let secondary = [];
        yObjects[i].forEach(el => secondary.push(Number(el[1])));
        consumerValues.push(secondary);
    };
        

    const chartData = {
        labels: [...xAxis],
        datasets: []
    };
  
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
    
    for(let i = 0; i < consumerValues.length; i++){
        chartData.datasets.push({
            label: consumerNames[i],
            data: consumerValues[i],
            fill: false,
            // backgroundColor: "blue",
            borderColor: randomColorGenerator()
        });
    };

  return (
    <div>
        <Typography 
            variant='h5'
            style ={{textAlign: 'center'}}
        >
            Total Fetch Requests
        </Typography>
        <Paper style={{height:"500px", width:"1000px"}}>
            <Chart type='line' data={ chartData } />
        </Paper>
    </div>
    
  );
};

export default ConsumerLineChart;
