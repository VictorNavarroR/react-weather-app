import React, { useContext, useEffect, useState } from 'react'
import { config } from '../../../../config';
import CoordsContext, { ICoordsContext } from '../../../../context/coords';
import useFetch from '../../../../hooks/useFetch';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import { BarData } from '../../../../models/bardata.interface.';
import { getForecastInfo } from '../../../../services/weatherService';
import BarChart from '../../../common/charts/barChart';
import LineChart from '../../../common/charts/lineChart';
import Loading from '../../../common/loading/loading';
import './daysBanner.scss'

function DaysBanner() {
    const context = useContext(CoordsContext);
    const { coords } = context as ICoordsContext;
    const [weatherData, setWeatherData] = useState<BarData>({ labels: [], datasets: [] });
    const [windData, setwindData] = useState<BarData>({ labels: [], datasets: [] });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect( () => {
        if((coords !== undefined)) { 
            getForecastInfo(coords.latitude, coords.longitude).then( forecastData => {
                setWeatherData({
                    labels: forecastData?.list.map( (wdate: any) => wdate.dt_txt),
                    datasets: [
                        {
                            label: "Temperature",
                            data: forecastData?.list.map((day: any) => day.main.temp),
                            backgroundColor: [
                                "#1e90ff",
                            ],
                        },
                        {
                            label: "Feels Like",
                            data: forecastData?.list.map((day: any) => day.main.feels_like),
                            backgroundColor: [
                                "#0D4DA7",
                            ],
                        },
                    ]
                });
                setwindData({
                    labels: forecastData?.list.map( (wdate: any) => wdate.dt_txt),
                    datasets: [
                        {
                            label: "Wind Speed (MPH)",
                            data: forecastData?.list.map((day: any) => day.wind.speed),
                            backgroundColor: [
                                "#1e90ff",
                            ], 
                        },
                    ]
                } );
                setLoading(false);
            });
        }
        
        
    }, [coords]);   

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