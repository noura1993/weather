const apiKey = 'xxxx';

const WeatherApi = {
    searchWeatherApi(location) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`).then( response => {
            return response.json();
        }).then( jsonResponse => {
            if(jsonResponse.weather) {
                return {
                    description: jsonResponse.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`,
                    temperature: Math.round(jsonResponse.main.temp),
                    feelsLike: Math.round(jsonResponse.main.feels_like),
                    tempMin: Math.round(jsonResponse.main.temp_min),
                    tempMax: Math.round(jsonResponse.main.temp_max),
                    humidity: jsonResponse.main.humidity,
                    country: jsonResponse.sys.country,
                    city: jsonResponse.name
                }; 
             }
        });
    }
};

export default WeatherApi;