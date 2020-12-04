import { easyFetch } from '../services/api'

export async function getWeatherByCityName(city){
    const apiWeather = await easyFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e709cb056127e489322b0e04f872ed8&lang=ca`)

    const sunrise =  new Date(apiWeather.sys.sunrise * 1000)
    const sunriseHours = sunrise.getHours()
    const sunriseMinuts = sunrise.getMinutes()

    const sunset =  new Date(apiWeather.sys.sunset * 1000)
    const sunsetHours = sunset.getHours()
    const sunsetMinuts = sunset.getMinutes()

    function formatDate(num1, num2){
        if(num1 >= 10 && num2 > 10) {
            const sunriseTime = `${num1}:${num2}h`
            return sunriseTime
        }else if(num1 >= 10 && num2 < 10){
            const sunriseTime = `${num1}:0${num2}h`
            return sunriseTime 
        }else if(num1 < 10 && num2 >= 10){
            const sunriseTime = `0${num1}:${num2}h`
            return sunriseTime 
        }else if(num1 < 10 && num2 < 10){
            const sunriseTime = `0${num1}:0${num2}h`
            return sunriseTime 
        }
      }
      


    const weatherStatus = {
        description : apiWeather.weather[0].description,
        icon : apiWeather.weather[0].icon,
        temp : (apiWeather.main.temp - 273).toFixed(1),
        humidity : apiWeather.main.humidity,
        wind : apiWeather.wind.speed,
        sunrise : formatDate(sunriseHours,sunriseMinuts),
        sunset : formatDate(sunsetHours,sunsetMinuts),
        name : apiWeather.name
    } 

return weatherStatus
}


