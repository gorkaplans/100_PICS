import React from 'react'; 
import { useState, useEffect } from 'react'

import { getWeatherByCityName } from '../../logic/weather';

import'./WeatherBar.scss'

const WeatherBar = ({ city }) => {
    const[weatherApi,setWeatherApi]= useState({})
   
    useEffect(() => {
        getWeatherFromApi(city)
    },[]) 

    const getWeatherFromApi = async (city) => {
        const mountainWeather = await getWeatherByCityName(city);
        setWeatherApi(mountainWeather)
    }

    const{description, icon, temp, humidity, wind, sunrise, sunset, name } = weatherApi
  
    
    
return (
        <div className="weather">
        <h1 className="bold title">Weather</h1>
        <p>{description}</p>
        <p>{temp}°C</p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img> 
        <p>{humidity}%</p>  
        <p>{wind}m/s</p> 
        <p>{sunrise}</p> 
        <p>{sunset}</p> 
        <p>{name}</p>
        </div>
    )
}   

export default WeatherBar;