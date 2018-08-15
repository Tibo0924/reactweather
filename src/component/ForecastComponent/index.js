import React from 'react';
import './style.css'

// #1 get openweather API
// #2 build carousel

// functional component lesz
class ForecastComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        forecast: [],
      }
    }
    
    
    // atmegy az APPba
    getForecast = (latitude, longitude) => {
      fetch(
          `https://api.openweathermap.org/data/2.5/forecast?${latitude}&${longitude}&appid=e3a7c7ce72b0e8bcd9f70694cbfea8cf`
        )
        .then(data => data.json())
        .then(data => console.log(data));
    }

    
    render() {
      return (
        // mappelj
      <div className="ForecastComponent">
        <h2> ForeCastComponent </h2>

      </div>
      )
    }
  }
    export default ForecastComponent