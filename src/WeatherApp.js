import React from "react";
import SearchingTool from "./SearchingTool";
import Location from "./Location";
import MainTemperature from "./MainTemperature";

import "./WeatherApp.css";
import Footer from "./Footer";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <SearchingTool />
        <Location />
        <MainTemperature />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default WeatherApp;
