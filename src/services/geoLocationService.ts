export const getCurrentPosition = (): Promise<GeolocationPosition > => {
  return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
          (position) => {
            window.localStorage.setItem('coords', JSON.stringify({ latitude: position.coords.latitude, longitude: position.coords.longitude})); 
            resolve(position)
          },
          (error) => reject(error)
      );
  });
};


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

