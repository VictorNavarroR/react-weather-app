import React, { useState } from 'react'
import { WeatherModel } from '../../../../models/weather.interface';
import { getWeatherByCity } from '../../../../services/weatherService';
import Loading from '../../../common/loading/loading';
import './search.scss'
import SearchResults from './searchResults/searchResults';

function HomeSearch() {

const [inputText, setInputText] = useState<string>("");
const [weatherData, setWeatherData] = useState<WeatherModel>();
const [weatherError, setWeatherError] = useState<boolean>();
const [loading, setLoading] = useState<boolean>();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    var lowerCase = event.target.value;
    setInputText(lowerCase);
  };

  const handleSearch = () => {
    setLoading(true);
    getWeatherByCity(inputText).then( weather => {
      if(weather.response ?? weather.response?.data.cod === '404') {
        setWeatherError(true);
        setInputText('');
        setLoading(false);
      } else {
        setWeatherData(weather);
        setWeatherError(false);
        setInputText('');
        setLoading(false);
      }
      
    });
  }

  return (
    <>
        <h2>Search by city</h2>
        <div className="search">
            <input className="search__input" name="search" type="text" placeholder="Search by city name" value={inputText}  onChange={inputHandler} />
            <button className="search__btn" onClick={handleSearch}>
                Search
            </button>
        </div>
        {
          loading 
          ? 
            <Loading /> 
          :
          <SearchResults weather={weatherData ? weatherData : null} weatherError={weatherError} /> 
        }
        
    </>
  )
}

export default HomeSearch