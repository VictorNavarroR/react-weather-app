import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';

function LineChart({lineData}: any): JSX.Element {
  return <Line data={lineData}/>
}

export default LineChart
