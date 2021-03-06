import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Forecast.css";

function Forecast() {
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
          <span className="temp">16°C</span>
        </div>
        <div className="col-3">
          <span className="temp">14°C</span>
        </div>
        <div className="col-3">
          <span className="temp">15°C</span>
        </div>
        <div className="col-3">
          <span className="temp">18°C</span>
        </div>
      </div>
      <div className="row">
        <div className="col-3 images">
          <i>
            <ReactAnimatedWeather
              icon="RAIN"
              color="whitesmoke"
              size={55}
              animate={true}
            />
          </i>
        </div>
        <div className="col-3 images">
          <i>
            <ReactAnimatedWeather
              icon="RAIN"
              color="whitesmoke"
              size={55}
              animate={true}
            />
          </i>
        </div>
        <div className="col-3 images">
          <i>
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="whitesmoke"
              size={55}
              animate={true}
            />
          </i>
        </div>
        <div className="col-3 images">
          <i>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="whitesmoke"
              size={55}
              animate={true}
            />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
