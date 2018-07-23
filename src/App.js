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
    error: null
  };
  // custom method for API call

  getWeather = async e => {
    console.log('async')
    e.preventDefault();
    // get name of input values
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();
      console.log(data)
      if (data.cod === 200) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        }, this.getImages());
      } else {
        this.setState({
          temperature: null,
          city: null,
          country: null,
          humidity: null,
          description: null,
          error: `There is no ${city} in ${country}`
        });
      }
    } else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: "Please enter a value!"
      });
    }
  };

  getImages = () => {
    const query = this.state.city;
    const country = this.state.country;
    const background = `https://source.unsplash.com/1600x900/?${query},${country}`;
    document.body.background = background;
    
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
