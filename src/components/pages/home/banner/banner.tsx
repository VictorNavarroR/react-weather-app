import React, { useEffect, useState } from 'react'
import Loading from '../../../common/loading/loading';
import { Coords } from '../../../../models/coords.interface';
import { getWeatherByCoords } from '../../../../services/weatherService';
import { Weather, WeatherModel } from '../../../../models/weather.interface';
import { getImageByName } from '../../../../services/imagesService';
import Error from '../../../common/error/error';
import './banner.scss'
import { BannerImage } from '../../../../models/bannerImage.interface';
import { getCurrentPositionP, handleGeoPermissionsStatus } from '../../../../services/geoLocationService';

function HomeBanner() {
    const [weather, setWeather] = useState<WeatherModel>();
    const [bannerImage, setBannerImage] = useState<BannerImage>();
    const [error, setError] = useState<boolean>(false);
    const [errorTxt, setErrorTxt] = useState<string>('Current city coords not found');
    const [geoLocationPermmissions, setGeoLocationPermissions] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);
      
    useEffect ( () => {
        const report = (state: string) => {
            setGeoLocationPermissions(state);
        }
        handleGeoPermissionsStatus(report);
    }, [])
    useEffect( () => {
        getCurrentPositionP()
            .then( position => {
                if(geoLocationPermmissions === 'denied') {
                    setError(true);
                    setErrorTxt('Geolocation permissions haven\'t been accepted by user');
                }
                if(geoLocationPermmissions === 'granted') {
                    getWeatherByCoords(position.coords.latitude, position.coords.longitude)
                        .then( weather => {
                            setWeather(weather);
                            getImageByName(weather.weather[0].description).then( image => setBannerImage(image.hits[0].largeImageURL));
                            setLoading(false);
                        })
                        .catch( () => setError(true) );
              }
            })
            .catch( () => {
                setError(true);
                setErrorTxt('Geolocation permissions haven\'t been accepted by user');
            }); 
        

    }, [geoLocationPermmissions]); 
    

  return (
    <>
        {
        error 
        ? 
        <Error error={errorTxt} /> 
        :
        loading 
        ? 
       <Loading /> 
        :
        <div className='banner' style={{ backgroundImage: `url(${bannerImage})` }}> 
        <div className="banner__info">
            <div className="banner__description">
                <div className="banner__header">{ weather?.name }</div>
                {
                    weather?.weather.map( (info: Weather ) => (
                        <p key={info.id}>{ info.description }</p>
                    ))
                }                        
            </div>
            <div className="banner__other-info">
                <div className="banner__info-item">
                    <span>{  weather ? Math.round(weather.main.feels_like): '' }<sup>o</sup></span>
                   <p>Feels like</p> 
                </div>
                <div className="banner__info-item">
                    <span>{ weather?.main.humidity } %</span>
                   <p>Humidity</p> 
                </div>
                <div className="banner__info-item">
                    <span>{ weather?.wind.speed } MPH</span>
                   <p>Wind Speed</p> 
                </div>
            </div>
            <div className="banner__actual-temp">
                { weather ? Math.round(weather.main.temp) : '' }<sup>o</sup>
            </div>
        </div>
        <div className="banner__img"></div>
    </div>
        }
    </>
  )
}

export default HomeBanner 