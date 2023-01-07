import { Coords } from './../models/coords.interface';

export const getCurrentPosition = () => { 
    const options = {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 0
      };
      
      const success = (pos: GeolocationPosition): void => {
        const crd: Coords = pos.coords;
        window.localStorage.setItem('coords', JSON.stringify({ latitude: crd.latitude, longitude: crd.longitude}))    
      }
      
      const error = (err: GeolocationPositionError)  => {
            window.localStorage.setItem('coords', JSON.stringify({ latitude: null, longitude: null}))
            throw new Error('Geolocation has failed: ' + err);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);

}

export const handleGeoPermissionsStatus = ( report: ( state: string ) => void ) => {
  navigator.permissions.query({ name: 'geolocation' }).then((result) => {
    if (result.state === 'granted') {
      report(result.state);
    } else if (result.state === 'prompt') {
      report(result.state);
    } else if (result.state === 'denied') {
      report(result.state);
    }
    result.addEventListener('change', () => {
      report(result.state);
    });
  });
}

