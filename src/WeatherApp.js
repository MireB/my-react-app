import React from "react";
import SearchingTool from "./SearchingTool";
import Location from "./Location";

import "./WeatherApp.css";

function WeatherApp() {
  return (
    <div className="container">
      <SearchingTool />
      <Location />
    </div>
  );
}

export default WeatherApp;
