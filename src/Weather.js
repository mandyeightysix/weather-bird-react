import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
                <div class="row opacity-50">
                    <div className="col-3">
                    <input
                        className="btn btn-outline-danger mb-3"
                        type="submit"
                        value="Vancouver"
                        id="vancouver"
                    />
                    </div>
                    <div className="col-3">
                    <input
                        className="btn btn-outline-danger mb-3"
                        type="submit"
                        value="Saskatoon"
                        id="saskatoon"
                    />
                    </div>
                    <div className="col-3">
                    <input
                        className="btn btn-outline-danger mb-3"
                        type="submit"
                        value="Montreal"
                        id="montreal"
                    />
                    </div>
                    <div className="col-3">
                    <input
                        className="btn btn-outline-danger mb-3"
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
                        <div className="opacity-50">
                        <input className="btn btn-outline-danger" type="submit" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="opacity-50">
                        <button id="geo-location" className="btn btn-outline-danger">
                            <i className="fa-solid fa-location-arrow"></i>
                        </button>
                    </div>
                </div>
                </div>
            </form>
                <WeatherInfo data={weatherData} />
                </div>
        );
    } else {
    search();
    return "Loading...";
    }
}
