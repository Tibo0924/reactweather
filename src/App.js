import React, { Component } from 'react';
import './App.css';
import Title from './component/Title';
import Form from './component/Form'
import Weather from './component/Weather'



const API_KEY = "e3a7c7ce72b0e8bcd9f70694cbfea8cf";

class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null,
    isHidden: true,
    // image: null,
  };
  // custom method for API call

  getWeather = async e => {
    console.log('async')
    e.preventDefault();
    // get name of input values
    const city = e.target.elements.city.value;
    if (city) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();
      console.log(data)
      if (data.cod === 200) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        }, this.getImages());
      } else {
        this.setState({
          temperature: null,
          city: null,
          humidity: null,
          description: null,
          error: `There is no ${city} `
        });
      }
    } else {
      this.setState({
        temperature: null,
        city: null,
        humidity: null,
        description: null,
        image: null,
        error: "Please enter a value!"
      });
    }
  };
  getImages(){
    this.setState({
      isHidden: false,
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.isHidden && <Title/>}
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          error={this.state.error}
        />
        <Form getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
