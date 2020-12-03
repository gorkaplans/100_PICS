import React from 'react'; 
import { useState } from 'react'

import { getWeatherByCoords } from '../../logic/weather';

import'./WeatherBar.scss'

const WeatherBar = ({ coords }) => {
    const[weather,setWeather]= useState({})
    console.log("WeatherBar -> weather", weather)
    const{w_,T_}= coords
   

    const getWeatherFromApi = async () => {
        const mountainWeather = await getWeatherByCoords(w_,T_);
        setWeather(mountainWeather)
    }


    
    return (
        <div className="weather">
        <h1 className="bold title">Tiempo</h1>   
        </div>
    )
}   

export default WeatherBar;