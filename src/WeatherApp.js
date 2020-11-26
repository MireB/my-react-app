import React from "react";
import SearchingTool from "./SearchingTool";
import Location from "./Location";
import MainTemperature from "./MainTemperature";
import Forecast from "./Forecast";

import "./WeatherApp.css";
import Footer from "./Footer";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <SearchingTool />
        <Location />
        <MainTemperature />
        <Forecast />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default WeatherApp;
