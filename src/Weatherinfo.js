import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                <div className="row currentLocation">
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
                        <WeatherIcon code={props.data.icon} size={52}/>
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
                            <span id="date" className="text-capitalize">
                                <FormattedDate date={props.data.date}/> {" "} | <span>
                                {props.data.description}</span>
                                </span>,
                        </li>
                        <li>
                            Humidity: <span id="humidity"></span>{props.data.humidity}% | Wind:{" "}
                            <span id="wind">{Math.round(props.data.wind)}</span><span className="windSpeed">{" "}km/h</span>                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    );
}