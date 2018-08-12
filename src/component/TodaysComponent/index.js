import React from 'react';
import './style.css'


const TodaysComp = (props) => {

    return (<div className="TodaysComp">
        <p>in<span className="cityName"> {props.city}</span></p>
        <p>the current temperature is <span className="temp">{props.temperature} &deg;C</span></p>
        <p>with <span className="temp">{props.humidity}%</span>humidity.</p>
        <p>{props.error}</p>
</div>);
  }

export default TodaysComp;