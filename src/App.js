import React, { Component } from 'react';
import QuoteComp from './component/QuoteComponent/';
import LocationComp from './component/LocationComponent/';
import TodaysComp from './component/TodaysComponent/';
import ForecastComponent from './component/ForecastComponent'
import './App.css';

const API_KEY = "e3a7c7ce72b0e8bcd9f70694cbfea8cf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: null,
      latitude: null, 
      longitude: null,
      forecast: {
        temp: null,
        date: null,
        description: null,
        icon: null,
      }
    };
  }
// getGeoLocation from browser
  getPermission = () => {
    const location = window.navigator && window.navigator.geolocation

    if (location){
      location.getCurrentPosition(function (position) {
          let latitude = position.coords.latitude;
          let longitude= position.coords.longitude;
          console.log(latitude);
          console.log(longitude);
          this.setState({
             latitude: latitude, 
             longitude: longitude
          }); 
      }.bind(this)); 
    }    
}



 

  
  getWeather = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then(data => data.json())
      .then(data => this.handleResponse(data, city))
      .catch(err => console.log(err));
    };
    
    handleResponse = (data, city) => {
      if (data.cod === '200') {
        this.setState({
          city: data.city.name,
          temperature: data.list[0].main.temp,
          humidity: data.list[0].main.humidity,
          description: data.list[0].weather[0].main,
          error: "",
          },
      );
    }else {
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
  // createHTML = (data) => {
  //   data.map(elem,i) => 
    
  //   `<div>
  //     <p>${elem.list[i].main.temp}</p>
  //   </div>`
  // }


  componentDidMount(){
    this.getPermission()
  }

  render() {
    return (
      <div className="App">
        <div className="top-row">
          <LocationComp 
            getWeather={this.getWeather}
            curTime={this.state.curTime}
             />
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
