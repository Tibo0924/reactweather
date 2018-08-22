import React from 'react';
import './style.css'


const Card = (props) => {

  return (
    <div className="card">
      <p>{props.dt_txt.slice(0,-3)}</p>
      <p className="temp">{props.main.temp} &deg;C</p>
      <p>{props.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`} alt=""/>
    </div>
  )
}


const ForecastComponent = (props) => {
  console.log(props)  
  return (
    <div className="ForecastComponent">
      {
        props.list && props.list.map( ForecastObject => (
          <Card {...ForecastObject} />
        ))
      }
    </div>
    )
  }
      
    export default ForecastComponent