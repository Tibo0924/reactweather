import React from 'react';

const Weather = (props) => {

    return <div className="weatherConditions">
        {props.city && <p>in<span className="cityName"> {props.city}</span></p>}
        {props.temperature && <p>the current temperature is <span className="temp">{props.temperature} &deg;C</span></p>}
        {props.humidity && <p>with <span className="temp">{props.humidity}%</span>humidity.</p>}
        {props.error && <p>{props.error}</p>}
      </div>;
  }

export default Weather;