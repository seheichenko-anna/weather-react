import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature-wrapper">
        <p id="temperature">{Math.round(props.celsius)}</p>
        <div className="units">
          <sup>
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </sup>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperature-wrapper">
        <p id="temperature">{Math.round(fahrenheit)}</p>
        <div className="units">
          <sup>
            <a href="/" onClick={convertToCelsius}>
              °C{" "}
            </a>
            | °F
          </sup>
        </div>
      </div>
    );
  }
}
