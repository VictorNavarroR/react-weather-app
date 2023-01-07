import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto';

function BarChart({barData}: any): JSX.Element {
  return <Bar data={barData}/>
}

export default BarChart