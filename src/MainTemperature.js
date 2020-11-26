import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./MainTemperature.css";

function MainTemperature() {
  let temperatureData = {
    temperature: "18",
    max: "21",
    min: "12",
    humidity: "53",
    wind: "13",
  };
  const defaults = {
    icon: "CLOUDY",
    color: "white",
    size: 120,
    animate: true,
  };
  return (
    <div className="MainTemperature">
      <div className="row">
        <div className="col-6">
          <div className="icon">
            <ReactAnimatedWeather
              icon={defaults.icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="float-left weather temperature">
            <span className="temperature">{temperatureData.temperature} </span>
            <span className="units">
              <a href="/">˚C</a> | <a href="/">˚F</a>
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="elements">
            <span>
              <strong>Max:</strong>
              {temperatureData.max}˚C <strong>Min:</strong>
              {temperatureData.min}˚C <strong>Humidity:</strong>
              {temperatureData.humidity}% <strong>Wind:</strong>
              {temperatureData.wind}km/h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTemperature;
