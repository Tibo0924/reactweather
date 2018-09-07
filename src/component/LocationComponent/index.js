/* eslint-disable no-restricted-globals */
import React from 'react';
import './style.css'

const LocationComp = (props)=> { 
  return(
  <div className="LocationComp">
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city" />
      <button type="submit">Submit</button>
    </form>
    <div>
    <p>or check your current location</p>
    <button onClick={props.getPermission}>Location</button>

    </div>

  </div>
  )

}
export default LocationComp;
