import React from "react";
import "./weather.style.css";

const Weather = props => {
  document.getElementById("test").innerHTML=localStorage.getItem("Cityname");
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <span id="test"></span>
        <h5 className="py-4">
          <i className={`${props.weatherIcon}`} />
        </h5>
        <h1>test</h1>

        {/* Get Celsius */}
        {props.temperature ? (
          <h1 className="py-2">{props.temperature}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="p3">
          {props.description}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
