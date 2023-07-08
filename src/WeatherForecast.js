import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
    let longitude = props.coordinates.lon;
    console.log(props.coordinates.lat);
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="weather-forecast" id="forecast">
        <ul className="weather-forecast-list">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <li key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <small>
          <a
            href="https://github.com/seheichenko-anna/weather-react.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
        </small>
      </div>
    );
  } else {
    load();
    return null;
  }
}
