import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        })
    }

    function search() {
        const apiKey = "21d20dbb06095f793410f891f00e7748";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div class="row opacity-75">
                    <div className="col-3">
                    <input
                        className="btn btn-outline-secondary mb-3"
                        type="submit"
                        value="Vancouver"
                        id="vancouver"
                    />
                    </div>
                    <div className="col-3">
                    <input
                        className="btn btn-outline-secondary mb-3"
                        type="submit"
                        value="Saskatoon"
                        id="saskatoon"
                    />
                    </div>
                    <div className="col-3">
                    <input
                        className="btn btn-outline-secondary mb-3"
                        type="submit"
                        value="Montreal"
                        id="montreal"
                    />
                    </div>
                    <div className="col-3">
                    <input
                        className="btn btn-outline-secondary mb-3"
                        type="submit"
                        value="Halifax"
                        id="halifax"
                    />
                    </div>
                </div>
            <form onSubmit={handleSubmit} id="search-form" className="mb-3">
                <div className="row">
                    <div className="col-8">
                        <input
                        type="search"
                        placeholder="Type in location..."
                        className="form-control"
                        id="city-input"
                        autocomplete="off"
                        onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-2">
                        <div className="opacity-75">
                        <input className="btn btn-outline-secondary" type="submit" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="opacity-75">
                        <button id="geo-location" className="btn btn-outline-secondary">
                            <i className="fa-solid fa-location-arrow"></i>
                        </button>
                    </div>
                </div>
                </div>
            </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
                </div>
        );
    } else {
    search();
    return "Loading...";
    }
}
