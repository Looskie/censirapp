import React from "react";
import ReactDOM from 'react-dom';
import "./assets/css/custom.css";

class Form extends React.Component {

  handleClick() {
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;

    localStorage.setItem("Cityname", city);
    localStorage.setItem("Country", country);
    return false;
  }

  render() {
    return (
      <form action="Weather.js">
        <input type="text" id="city" name="zipcode" autoComplete="off" placeholder="Enter your City/Zipcode"/> <br />
        <input type="text" id="country" name="country" autoComplete="off" placeholder="Enter your Country"/>
        <input type="submit" id="submit" autoComplete="off" onClick={this.handleClick} value="→"/>
      </form>
    );
  }
};

export default Form;
