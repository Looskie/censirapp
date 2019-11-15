import React from "react";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

// These are imports for the images //
import "./icons.css";

// My API key
const API_KEY = "f118068f2221b29881e4092bbcf1a389";

class CensirMain extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature: undefined,
      temp_min: null,
      temp_max: null,
      icon: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };

    this.weatherIcon = {
      Thunder: "thunder",
      Sprinkle: "sleet",
      Rain: "rain",
      Snow: "snow",
      Fog: "fog",
      Cloudy: "cloudy",
      Sunny: "sunny"
    };
  }

  get_WeatherIcons(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
      this.setState({
        icon: icons.Thunder
      });
      break;
      case rangeId >= 300 && rangeId <= 321:
      this.setState({
        icon: icons.Sprinkle
      });
      break;
      case rangeId >= 500 && rangeId <= 521:
      this.setState({
        icon: icons.Rain
      });
      break;
      case rangeId >= 600 && rangeId <= 622:
      this.setState({
        icon: icons.Snow
      });
      break;
      case rangeId >= 701 && rangeId <= 781:
      this.setState({
        icon: icons.Fog
      });
      break;
      case rangeId >= 801 && rangeId <=804:
      this.setState({
        icon: icons.Cloudy
      });
      break;
      case rangeId === 800:
      this.setState({
        icon: icons.Sunny
      });
      break;
      default:
      this.setState({
        icon: icons.Sunny
      });
    }
  }
  calFahrenheit(temperature) {
    let fah = Math.floor((temperature*9/5)+32);
    return fah;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
    const country = e.target.elements.country.value;
    const call_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},${country}&appid=${API_KEY}&units=metric`);
    const data = await call_api.json();
    try {
      if (country === 'US' || country === 'Us' || country === 'uS' || country === 'us' || country === 'USA' || country === 'usa' || country === 'Usa') {
        this.setState({
          temperature: this.calFahrenheit(data.main.temp),
          temp_min: this.calFahrenheit(data.main.temp_min),
          temp_max: this.calFahrenheit(data.main.temp_max),
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
        this.get_WeatherIcons(this.weatherIcon, data.weather[0].id);
        console.log(data);
      }
      else {
        this.setState({
          temperature: data.main.temp,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }
  }
  catch(err) {
    this.setState({
      temperature: undefined,
      temp_min: undefined,
      temp_max: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: console.log("bruh")
    });
  }
    }

  render() {
     return (
       <div>
        <Form getWeather={this.getWeather}/>
        <Weather
        cityname={this.state.city}
        weatherIcon={this.state.icon}
        temperature={this.state.temperature}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
          />
       </div>
     );
  }
};

export default CensirMain;
