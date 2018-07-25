import React from 'react';


const Form = props => (
      <div className="form">
        <form onSubmit={props.getWeather}>
         <h1> Enter a city  <span>name</span> </h1><hr/>
          <input className="rtl"type="text" name="city" placeholder="city" />
          <span >then hit enter</span>
        </form>
      </div>
    )
  

export default Form;