import React from 'react';

const Weather = (props) => {

    return <div>
        {props.city && <h1>in {props.city}</h1>}
        {props.temperature && <h1>the temperature is {props.temperature} &deg;C</h1>}
        {props.humidity && <h1>with {props.humidity}% humidity.</h1>}
        {props.error && <h1>{props.error}</h1>}
      </div>;
  }

export default Weather;