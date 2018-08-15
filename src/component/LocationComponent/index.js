import React from 'react';
import './style.css'


const LocationComp = props => (



      <div className="LocationComp">
        <p> Enter a city  <span>name</span> </p><hr/>
        <form onSubmit={props.getWeather}>
          <input type="text" name="city" placeholder="city" />
        </form>
        <button className="toggleButton" onClick={props.getPermission}></button>

      </div>
    )

export default LocationComp;