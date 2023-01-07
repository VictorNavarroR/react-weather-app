import React, { useState } from 'react'
import { config } from '../../../../config';
import useFetch from '../../../../hooks/useFetch';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import { BarData } from '../../../../models/bardata.interface.';
import BarChart from '../../../common/charts/barChart';
import LineChart from '../../../common/charts/lineChart';
import Loading from '../../../common/loading/loading';
import './daysBanner.scss'

function DaysBanner() {
    const [storedValue] = useLocalStorage('coords');
    const { data, loading } = useFetch(`${config.apiForecastUrl}lat=${storedValue?.latitude}&lon=${storedValue?.longitude}&units=metric&APPID=${config.apiKey}&cnt=25`);

    const weatherData: BarData = {
        labels: data?.list.map( wdate => wdate.dt_txt),
        datasets: [
            {
                label: "Temperature",
                data: data?.list.map(day => day.main.temp),
                backgroundColor: [
                    "#1e90ff",
                ],
            },
            {
                label: "Feels Like",
                data: data?.list.map(day => day.main.feels_like),
                backgroundColor: [
                    "#0D4DA7",
                ],
            },
        ]
    }
    const windData: BarData = {
        labels: data?.list.map( wdate => wdate.dt_txt),
        datasets: [
            {
                label: "Wind Speed (MPH)",
                data: data?.list.map(day => day.wind.speed),
                backgroundColor: [
                    "#1e90ff",
                ], 
            },
        ]
    }    

  return (
    <div className="daysbanner">
    <h2>5 day weather forecast</h2>
    <div className="charts">
        { loading 
        ? 
            <Loading /> 
        : 
        <>
            <BarChart barData={weatherData} />
            <LineChart lineData={windData} />
        </>
        }
    </div>
    </div>
  )
}

export default DaysBanner