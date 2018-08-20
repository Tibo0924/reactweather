/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import './style.css'

class LocationComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null
    }
    this.API_KEY = process.env.REACT_APP_WEATHER_API_KEY
  }
  // ask for user permission to get current location
  getPermission = (props) => {
    if (confirm('Ok to know where you are?')){
      // checking for geolocation && set it to state
      const location = window.navigator && window.navigator.geolocation
      location.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude= position.coords.longitude;
        this.setState({
          latitude: latitude,
          longitude: longitude
        }); 
      }.bind(this))
    }else {
        this.setState({
          latitude: `don't have permission`,
          longitude: `don't have permission`
        })
    }
    this.getWeatherGPS(props)
  }

  getWeatherGPS = (props) => {  
    console.log(this.state.latitude,'latitude')
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={${props.latitude}}&lon={${props.longitude}}&appid=9da3d7bbfb62bb8e330dcbbe788ce42d
    `)
      .then(data => data.json())
      .then(data => console.log(data))
  }

  render() {    
    return (
        <div className="LocationComp">
          <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="city" />
            <p>or check your current location</p>
            <button type="submit">Click here</button>
          </form>
          <button className="toggleButton" onClick={this.getPermission}>Check</button>
        </div>
      )
    }
}

export default LocationComp;