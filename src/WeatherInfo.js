import React from "react";
import FormattedDate from "./FormattedDate";
import "./App.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="weather-wrapper">
        <div className="name-current-city">
          <h1 id="city">{props.data.city} </h1>
        </div>
        <div className="current-weather">
          <div id="icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <ul className="current-weather-info-list">
        <li>
          Last update: {""}
          <span id="date">
            <FormattedDate date={props.data.date} />
          </span>
        </li>
        <li id="description">{props.data.description}</li>
        <li>
          Humidity: <span id="humidity">{props.data.humidity}</span>%
        </li>
        <li>
          Wind: <span id="wind">{props.data.wind}</span> km/h
        </li>
      </ul>
      <small>
        <a href="https://github.com/seheichenko-anna/weather-react.git">
          Open-source code
        </a>
      </small>
    </div>
  );
}
