import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/50d@2x.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form">
          <div className="search-city-input">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control search-input"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="search-city-btn">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </form>
        <div className="name-current-city">
          <h1 id="city">{weatherData.city} </h1>
        </div>
        <div className="current-weather">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            id="icon"
            width="100"
          />
          <p id="temperature">{Math.round(weatherData.temperature)}</p>
          <div className="units">
            <sup>°C</sup>
          </div>
        </div>
        <ul className="current-weather-info-list">
          <li>
            Last update:{" "}
            <span id="date">
              <FormattedDate date={weatherData.date} />
            </span>
          </li>
          <li id="description">{weatherData.description}</li>
          <li>
            Humidity: <span id="humidity">{weatherData.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{weatherData.wind}</span> km/h
          </li>
        </ul>
        <small>
          <a href="https://github.com/seheichenko-anna/weather-react.git">
            Open-source code
          </a>
        </small>
      </div>
    );
  } else {
    const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
