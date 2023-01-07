interface CityLatLong {
    latitude: number;
    longitude: number;
}

interface City {
    [key: string]: {
        latitude: number;
        longitude: number;
    }
}

const cities: City[] = [
    {
        'barcelona': {
            latitude: 41.392727, 
            longitude: 2.1050841,
        }
    },
    {
        'london': {
            latitude: 51.5287714, 
            longitude: -0.2420208,
        }
    }
];

export const getLatLongByCity = ( cityName: string ): CityLatLong => {
    const cityLatLong = cities.find( city => Object.keys(city).includes(cityName)) ? cities.find( city => Object.keys(city).includes(cityName))![cityName] : null;
    return cityLatLong ? cityLatLong : {} as CityLatLong;
}