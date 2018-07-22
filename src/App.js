import React, { Component } from 'react';
import './App.css';
import Title from './component/Title';
import Form from './component/Form'
import Weather from './component/Weather'




const API_KEY = "e3a7c7ce72b0e8bcd9f70694cbfea8cf";

class App extends Component {
  state = {
    temperature: undefined,
    city : undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  } 
  getWeather = async (e) => {
    e.preventDefault();
    // get name of input values
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}
&units=metric`); 
    const data = await api_call.json();
    console.log(data)
    
    this.setState({ 
      temperature : data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
     })
  }
  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/> 
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
