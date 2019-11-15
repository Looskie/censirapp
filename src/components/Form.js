import React from "react";
import ReactDOM from 'react-dom';
import "./assets/css/custom.css";

class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" id="city" name="zipcode" autoComplete="off" placeholder="Enter your City/Zipcode"/> <br />
        <input type="text" id="country" name="country" autoComplete="off" placeholder="Enter your Country"/>
        <input type="submit" id="submit" autoComplete="off" value="→"/>
      </form>
    );
  }
};

export default Form;
