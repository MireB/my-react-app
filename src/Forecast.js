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
        <div className="col-3">
          Fri
          <span>
            <ReactAnimatedWeather
              icon={defaults.icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </span>
        </div>
        <div className="col-3">Sat</div>
        <div className="col-3">Sun</div>
        <div className="col-3">Mon</div>
      </div>
    </div>
  );
}

export default Forecast;
