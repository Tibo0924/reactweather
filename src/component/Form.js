import React from 'react';


const Form = props => (
      <div className="form">
        <form onSubmit={props.getWeather}>
         <h1> Enter a city name </h1>
      <input type="text" name="city" placeholder="city" /><br /><hr /> <span className="rtl">! then hit enter</span>
          {/* <button>Get data</button> */}
        </form>
      </div>
    )
  

export default Form;