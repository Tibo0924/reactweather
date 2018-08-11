import React, { Component } from 'react';
import Title from './component/Header/Title';
import Form from './component/Header/Form';
import Weather from './component/Body/Weather';
import './App.css';

const API_KEY = "e3a7c7ce72b0e8bcd9f70694cbfea8cf";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: null,
      showTitle: true,
      curTime: null
    };
  }
//
  getWeather2 = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then(data => data.json())
      .then(data => this.handleResponse(data, city))
      .catch(err => console.log(err));
    };
    
    handleResponse = (data, city) => {
      if (data.cod === 200) {
        this.setState(
          {
            temperature: data.main.temp,
            city: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          },
        this.ShowTitle()
      );
    } else {
      this.setState({
        temperature: null,
        city: null,
        humidity: null,
        description: null,
        showTitle: false,
        error: `There is no ${city} `
      });
    }
    console.log(data)
  };

  ShowTitle() {
    this.setState({
      showTitle: false
    });
  }

  componentWillMount() {
    setInterval(
      function() {
        this.setState({
          curTime: new Date().toLocaleTimeString()
        });
      }.bind(this),
      1000
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.showTitle && <Title curTime={this.state.curTime} />}
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          error={this.state.error}
        />
        {this.state.showTitle && <Form getWeather={this.getWeather} />}
      </div>
    );
  }
}

export default App;
