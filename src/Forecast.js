import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Forecast.css";

function Forecast() {
  const defaults = {
    icon: "CLOUDY",
    color: "white",
    size: 60,
    animate: true,
  };

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-3">Fri</div>
        <div className="col-3">Sat</div>
        <div className="col-3">Sun</div>
        <div className="col-3">Mon</div>
      </div>
      <div className="row">
        <div className="col-3">
          <span>16°C</span>
        </div>
        <div className="col-3">
          <span>14°C</span>
        </div>
        <div className="col-3">
          <span>15°C</span>
        </div>
        <div className="col-3">
          <span>18°C</span>
        </div>
      </div>
      <div className="row">
        <div
          className="col-3 images></div>
        <div className="
          col-3
          images
        ></div>
        <div
          className="col-3 images></div>
        <div className="
          col-3
          images
        ></div>
      </div>
    </div>
  );
}

export default Forecast;
