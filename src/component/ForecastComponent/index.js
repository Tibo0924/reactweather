import React from 'react';
import './style.css'

// #1 get openweather API
// #2 build carousel


class ForecastComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        forecast: [],
      }
    }
    
    
    getForecast = (latitude, longitude) => {
      fetch(
          `https://api.openweathermap.org/data/2.5/forecast?${latitude}&${longitude}&appid=e3a7c7ce72b0e8bcd9f70694cbfea8cf`
        )
        .then(data => data.json())
        .then(data => console.log(data));
    }

    // handlePos = position => {
    //   let latitude = position.coords.latitude;
    //   let longitude = position.coords.longitued;
    //   console.log(latitude,longitude)
    // }

    // componentDidMount(){
    //     navigator.geolocation.getCurrentPosition(handlePos)
    // }
    
    render() {
      return (
      <div className="ForecastComponent">
        <h2> ForeCastComponent </h2> 
      </div>
      )
    }
  }
    export default ForecastComponent