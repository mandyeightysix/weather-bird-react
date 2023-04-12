import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Weatherforecast(props) {
    return (
        <div classname="WeatherForecast">
            <div className="row">
                <div className="col">
                    Thu <WeatherIcon code={props.alt}/> 19 10
                </div>
            </div>
        </div>
    );
}