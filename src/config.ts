interface Config {
    apiUrl: string;
    apiKey: string;
    apiForecastUrl: string;
    imagesApiUrl: string;
    imagesApiKey: string;
}

export const config: Config = {
    apiUrl: 'https://api.openweathermap.org/data/2.5/weather?',
    apiForecastUrl: 'https://api.openweathermap.org/data/2.5/forecast?',
    apiKey: '967b7b1a5ff5c95858646f18e302fdb5',
    imagesApiUrl: 'https://api.pexels.com/v1/search?query=',
    imagesApiKey: '563492ad6f91700001000001257edbb45ce8446c82b338f4058f03cb'
}