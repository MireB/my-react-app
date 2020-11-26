import React from "react";
import SearchingTool from "./SearchingTool";
import Location from "./Location";
import MainTemperature from "./MainTemperature";

import "./WeatherApp.css";

function WeatherApp() {
  return (
    <div className="container">
      <SearchingTool />
      <Location />
      <MainTemperature />
    </div>
  );
}

export default WeatherApp;
