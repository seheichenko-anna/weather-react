import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weather-forecast-list-item">
      <h2 className="weather-forecast-date">{day()}</h2>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <p className="weather-forecast-temp">
        <span className="weather-forecast-temp-max">{maxTemperature()}</span>{" "}
        <span className="weather-forecast-temp-min">{minTemperature()}</span>
      </p>
    </div>
  );
}
