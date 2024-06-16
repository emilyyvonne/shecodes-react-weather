import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-app-data">
      <div className="weather-app-now">
        <div>
          <h1 className="weather-app-city">{props.data.city}</h1>
          <p className="weather-app-details">
            <FormattedDate date={props.data.date} />

            <span className="text-capitalize"> {props.data.description} </span>
            <div className="descriptions">
              Humidity: <strong> {props.data.humidity}%, </strong>
              Wind: <strong>{props.data.wind} km/h</strong>
            </div>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <span className="weather-app-icon">
            <WeatherIcon code={props.data.icon} size={60} />
          </span>

          <span className="weather-app-temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
      </div>
    </div>
  );
}
