import React from 'react'
import { WeatherProp } from '../../../../../models/weather.interface';
import { getIconByTemp } from '../../../../../services/weatherService';
import Error from '../../../../common/error/error';
import './searchResults.scss'

function SearchResults({weather, weatherError}: WeatherProp) {
    const iconUrl = weather ? `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` : '';
    const tempIcon = weather ? getIconByTemp(weather.main.temp) : 'no-results.png';
  return (
    <>
        { weatherError
        ?  
        <Error error="City not found" />
        :
        weather
        ?
            <>
                <h3 className="search-title">{weather?.name}</h3>
                <div className="search-results">
                    <div className="search-results__temp">
                        <div>
                            <p>{Math.floor(weather?.main.temp)}<sup>o</sup></p>
                            <small>Feels like: {Math.floor(weather?.main.feels_like)}<sup>o</sup></small>
                        </div>
                        
                        <img src={`weather-images/${tempIcon}`} alt="temp-icon" />
                    </div>
                    <div className="search-results__weather">
                        <img src={iconUrl} alt="weather-icon" />
                        <h3>{weather?.weather[0].main}</h3>
                        <p>{weather?.weather[0].description}</p>
                    </div>
                </div>
            </>
            : ''
        }
    </>
  )
}

export default SearchResults