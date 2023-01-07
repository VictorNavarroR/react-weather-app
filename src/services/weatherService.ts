import axios, { AxiosResponse, AxiosError } from "axios";
import { config } from '../../src/config';

export const getWeatherByCoords = ( lat: number, lon: number ) => {
    const url = `${config.apiUrl}lat=${lat}&lon=${lon}&units=metric&APPID=${config.apiKey}`
    return axios.get(url)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((err: AxiosError) => {
      return err;
    });   
}

export const getWeatherByCity = ( city: string ) => {
  const url = `${config.apiUrl}q=${city}&units=metric&APPID=${config.apiKey}`
  return axios.get(url)
  .then((response: AxiosResponse) => {
    return response.data;
  })
  .catch((err: AxiosError) => {
    return err;
  });   
}

export const getIconByTemp = ( temp: number ) => {
  const images = {
    cold: 'frozen.png',
    fresh: 'fresh-air.png',
    warm: 'sunny.png',
    hot: 'hot.png'
  }
  if( temp < 10) {
    return images.cold;
  }
  if( temp < 20) {
    return images.fresh;
  }
  if( temp < 30) {
    return images.warm;
  }
  if( temp > 30) {
    return images.hot;
  }

}