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
  }

  getPermission = () => {
    if (confirm('Ok to know where you are?')){
      const location = window.navigator && window.navigator.geolocation
      location.getCurrentPosition(function (position) {
          let latitude = position.coords.latitude;
          let longitude= position.coords.longitude;
          console.log(latitude);
          console.log(longitude);
          this.setState({
             latitude: latitude, 
             longitude: longitude
          }); 
          // TODO: getWeatherGPS function
      }.bind(this)); 
    } else {
      console.log('no')
    }
  }

  render() {
    return (
        <div className="LocationComp">
          <p> Enter a city  <span>name</span> </p><hr/>
          <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="city" />
          </form>
          <button className="toggleButton" onClick={this.getPermission}>Submit</button>
        </div>
      )
    }
}

export default LocationComp;