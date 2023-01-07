import React, { useEffect, useState } from 'react'
import Loading from '../../../common/loading/loading';
import { Coords } from '../../../../models/coords.interface';
import { getWeatherByCoords } from '../../../../services/weatherService';
import { Weather, WeatherModel } from '../../../../models/weather.interface';
import { getImageByName } from '../../../../services/imagesService';
import Error from '../../../common/error/error';
import './banner.scss'

function HomeBanner() {
    const [weather, setWeather] = useState<WeatherModel>();
    const [bannerImage, setBannerImage] = useState<string>();
    const [error, setError] = useState<boolean>(false);
    const [errorTxt, setErrorTxt] = useState<string>('Current city coords not found');

    useEffect( () => {
        const coords = JSON.parse(window.localStorage.getItem('coords') as string) as Coords;
        if(coords.latitude === null && coords.longitude === null) {
            setErrorTxt('Geolocation permissions haven\'t been accepted by user');
        }
        getWeatherByCoords(coords.latitude, coords.longitude)
        .then( weather => {
            setWeather(weather);
            getImageByName(weather.weather[0].description).then( image => setBannerImage(image.photos[0].src.landscape));
        })
        .catch( () => setError(true) );
    }, []); 
    

  return (
    <>
        {
        error 
        ? 
        <Error error={errorTxt} /> 
        :
        weather 
        ? 
        <div className='banner' style={{ backgroundImage: `url(${bannerImage})` }}> 
            <div className="banner__info">
                <div className="banner__description">
                    <div className="banner__header">{ weather.name }</div>
                    {
                        weather.weather.map( (info: Weather ) => (
                            <p key={info.id}>{ info.description }</p>
                        ))
                    }                        
                </div>
                <div className="banner__other-info">
                    <div className="banner__info-item">
                        <span>{ Math.round(weather.main.feels_like) }<sup>o</sup></span>
                       <p>Feels like</p> 
                    </div>
                    <div className="banner__info-item">
                        <span>{ weather.main.humidity } %</span>
                       <p>Humidity</p> 
                    </div>
                    <div className="banner__info-item">
                        <span>{ weather.wind.speed } MPH</span>
                       <p>Wind Speed</p> 
                    </div>
                </div>
                <div className="banner__actual-temp">
                    { Math.round(weather.main.temp) }<sup>o</sup>
                </div>
            </div>
            <div className="banner__img"></div>
        </div>
        : <Loading /> }
    </>
  )
}

export default HomeBanner 