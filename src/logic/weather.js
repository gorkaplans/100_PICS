import { easyFetch } from '../services/api'

export async function getWeatherByCoords(lat, lon){
    const apiWeather = await easyFetch(`pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=1e709cb056127e489322b0e04f872ed8`)
    return apiWeather
}


