import React from 'react';
import './style.css'

const LocationComp = props => (

// 1 Date 
// 2 Button - toggle permission for currentLoc

      <div className="LocationComp">
        <p> Enter a city  <span>name</span> </p><hr/>
        <form onSubmit={props.getWeather}>
          <input type="text" name="city" placeholder="city" />
        </form>
      </div>
    )
  

export default LocationComp;