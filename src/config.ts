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
    imagesApiUrl: 'https://pixabay.com/api/?',
    imagesApiKey: '32682262-8fbccdf62665908da55a7f6fc'
}