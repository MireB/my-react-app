import React from "react";

import "./SearchingTool.css";

function SearchingTool() {
  return (
    <div className="SearchingTool">
      <form className="form-inline">
        <input
          type="search"
          className="form-control shadow-sm"
          placeholder="Enter a city"
          size="13"
        />
        <button type="submit" className="btn btn-primary mb-2 shadow-sm">
          Search
        </button>
        <button
          type="submit"
          className="btn btn-primary mb-2 shadow-sm currentLocation"
        >
          Current
        </button>
      </form>
    </div>
  );
}

export default SearchingTool;
