import React from 'react';

const Weather = (props) => {

    return (
      <div>
        {props.temperature &&  <h1>{props.temperature}</h1>}
        {props.city && <h1>{props.city}</h1>}
        {props.country && <h1>{props.country}</h1>}
        {props.humidity &&  <h1>{props.humidity}</h1>}
        {props.description && <h1>{props.description}</h1> }
        {props.error && <h1>{props.error}</h1> }
      </div>
      );
  }



export default Weather;