import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Tuesday 08:26",
            description: response.data.weather[0].description,
            iconUrl: 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png',
            wind: response.data.wind.speed,
            city: response.data.name
        })
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="row">
                <div className="col-12">
                    <div className="opacity-50">
                    <h1 id="location">{weatherData.city}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                    <div className="weather-temperature">
                        <div className="temperature-container d-flex justify-content-end">
                        <canvas width="52" height="52"></canvas>
                        <img src="{weatherData.iconUrl}" alt="Sunny" id="icon" className="weather-icon" />
                        <span className="temp" id="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="units"
                        ><a href="/" id="celsius-link" className="active">20°C</a>
                        |
                        <a href="/" id="fahrenheit-link">60°F</a></span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <div className="description-date">
                    <ul>
                        <li className="text-capitalized">
                            <span id="date">{weatherData.date}</span>,
                            <span id="description">{weatherData.description}</span>
                        </li>
                        <li>
                            Humidity: <span id="humidity"></span>{weatherData.humidity}, Wind:
                            <span id="wind">{weatherData.wind}</span>Km/H
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    } else {
    const apiKey = "0ceco9a849f99808bt5f98c429a1bbe3";
    let city = "Hamilton";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
    }
}
