import React, { Component } from 'react';
import QuoteComp from './component/QuoteComponent/';
import LocationComp from './component/LocationComponent/';
import TodaysComp from './component/TodaysComponent/';
import ForecastComponent from './component/ForecastComponent'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        today: {
          temperature: null,
          city: null,
          country: null,
          humidity: null,
          description: null
        },
        forecast: {
          temp: null,
          date: null,
          description: null,
          icon: null
        }
      },
      error: null
    };
    this.API_KEY = process.env.REACT_APP_WEATHER_API_KEY
  }

  componentDidMount(){
    
  }

  getWeatherGPS = () => {
    fetch()
      .then()
      .then()
  }

  getWeather = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.API_KEY}&units=metric`)
      .then(data => data.json())
      .then(data => this.handleResponse(data, city))
      .catch(err => console.log(err));
    };
    
  handleResponse = (data, city) => {
    if (data.cod === '200') {
      // new state structure
      this.setState({
          city: data.city.name,
          temperature: data.list[0].main.temp,
          humidity: data.list[0].main.humidity,
          description: data.list[0].weather[0].main,
          error: "",
        },
      );
    } else {
      this.setState({
        temperature: null,
        city: null,
        humidity: null,
        description: null,
        error: `There is no ${city} `
      });
    }
    console.log(data)
  };

  render() {
    return (
      <div className="App">
        <div className="top-row">
          <LocationComp getWeather={this.getWeather}/>
          <QuoteComp />
          <TodaysComp
            temperature={this.state.temperature}
            city={this.state.city}
            humidity={this.state.humidity}
            error={this.state.error}
          />
        </div>
       <ForecastComponent />
      </div>
    );
  }
}

export default App;
