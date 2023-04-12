import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                <div className="row">
                <div className="col-12">
                    <div className="opacity-50">
                    <h1 id="location">{props.data.city}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                    <div className="weather-temperature">
                        <div className="temperature-container d-flex justify-content-end">
                        <canvas width="52" height="52"></canvas>
                        <img src={props.data.iconUrl} alt="Sunny" id="icon" className="weather-icon" />
                        <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <div className="description-date">
                    <ul>
                        <li>
                            <FormattedDate date={props.data.date}/>
                            <span id="date">{props.data.date.getDay()}</span>,{" "}
                            <span className="text-capitalize" id="description">{props.data.description}</span>
                        </li>
                        <li>
                            Humidity: <span id="humidity"></span>{props.data.humidity}, Wind:
                            <span id="wind">{props.data.wind}</span>Km/H
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    );
}