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
          list: null,
        }
      },
      error: ""
    };
    this.API_KEY = process.env.REACT_APP_WEATHER_API_KEY
  }
  
  getWeatherGPS = (latitude,longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?${latitude}&${longitude}&appid=${this.API_KEY}`)
      .then(data => data.json())
      .then(data => this.handleResponse(data))
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
      console.log(data)
      this.setState({
        weather:{
          today:{
            city: data.city.name,
            temperature: data.list[0].main.temp,
            humidity: data.list[0].main.humidity,
            description: data.list[0].weather[0].main,
          },
          forecast:{
            list: data.list,
          },
          error:"",

        },
      })
    } else {
      this.setState({
        error: 'No such city in our database',
    })
    console.log(data)
  }
}
  

  render() {
    const today = this.state.weather.today
    const forecast = this.state.weather.forecast
    return (
      <div className="App">
        <div className="top-row">
          <LocationComp getWeather={this.getWeather}/>
          <QuoteComp />
          <TodaysComp
            temperature={today.temperature}
            city={today.city}
            humidity={today.humidity}
            error={this.state.error}
          />
         </div>
          <ForecastComponent
            list={forecast.list}
            temperature={forecast.temp}
            date={forecast.data}
            icon={forecast.icon}
            description={forecast.description}
          />
      </div>
    );
  }
}


export default App;
