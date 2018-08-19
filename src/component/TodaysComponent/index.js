import React from 'react';
import './style.css'


const TodaysComp = (props) => (
  <div className="TodaysComp">
    <p><span className="cityName"> {props.city}</span></p>
    <p><span className="temp">{props.temperature} &deg;C</span></p>
    <p><span className="temp">{props.humidity}%</span>humidity.</p>
    <p>{props.error && props.error}</p>
  </div>
);

export default TodaysComp;