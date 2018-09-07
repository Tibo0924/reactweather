/* eslint-disable no-restricted-globals */
import React from 'react';
import './style.css'
import 'font-awesome/css/font-awesome.min.css';



const LocationComp = (props)=> { 
  return(
  <div className="LocationComp">
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city" />
      <button type="submit"><span>Submit</span></button>&nbsp;or&nbsp;
      <i onClick={props.getPermission} className="icon">&#xf05b;</i>
    </form>
    <div>
    </div>

</div>
  )

}
export default LocationComp;
