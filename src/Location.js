import React from "react";

import "./Location.css";

function Location() {
  let locationData = {
    city: "Barcelona",
    date: "Thu 26 Nov",
    time: "11:56",
    description: "Cloudy",
  };
  return (
    <div className="Location">
      <div className="row">
        <div className="col-12">
          <h1>{locationData.city}</h1>
          <h5>
            {locationData.date}, {locationData.time}
          </h5>
          <h6>{locationData.description}</h6>
        </div>
      </div>
    </div>
  );
}

export default Location;
