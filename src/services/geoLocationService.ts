import { Coords } from './../models/coords.interface';

export const getCurrentPosition = () => { 
    const options = {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 0
      };
      
      function success(pos: GeolocationPosition): void {
        const crd: Coords = pos.coords;
        window.localStorage.setItem('coords', JSON.stringify({ latitude: crd.latitude, longitude: crd.longitude}))    
      }
      
      function error(err: GeolocationPositionError) {
            throw new Error('Geolocation has failed: ' + err);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);

}