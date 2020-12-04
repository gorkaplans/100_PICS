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
        <div className="weather light">
             <section className="section-weather  description">
                <p className="light">{description}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img> 
            </section>
        <section className="line-vertical"></section>
            <section className="section-weather temperature">
                <h1 className="light temp-number">{temp}</h1>
                <p className="temp-cent">°C</p>
            </section>
        <section className="line-vertical"></section>
            <section className="section-weather  humity">
                <p className="temp-sec light">Humitat</p>
                <h1 className="bold temp-number">{humidity}%</h1>
            </section>
        <section className="line-vertical"></section>
                <section className="section-weather  wind">
                <p className="temp-sec light">Vent</p>
                <h1 className="bold temp-number">{wind}m/s</h1>
            </section>
        <section className="line-vertical"></section>
            <section className="section-weather  sunrise">
                <p className="temp-sec light">↑ sol:</p>
                <h1 className="bold temp-number">{sunrise}</h1>
            </section>
        <section className="line-vertical"></section>
            <section className="section-weather  sunset">
                <p className="temp-sec light">↓ sol:</p>
                <h1 className="bold temp-number">{sunset}</h1>
            </section>
        </div>
    )
}   

export default WeatherBar;