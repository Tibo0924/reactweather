/* eslint-disable no-restricted-globals */
import React from 'react';
import './style.css'

const LocationComp = (props)=> { 
  return(
  <div className="LocationComp">
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city" />
      <p>or check your current location</p>
      <button type="submit">Click here</button>
    </form>
    <button onClick={props.getPermission}>Check</button>
  </div>
  )

}
export default LocationComp;
