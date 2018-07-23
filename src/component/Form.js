import React from 'react';


const Form = props => (
      <div className="form">
        <form onSubmit={props.getWeather}>
        <button>Get data</button>
          <h1>Enter a city name </h1>
          <input type="text" name="city" placeholder="city"/><br/>
          <h2>Enter a country name</h2>
          <input type="text" name="country" placeholder="Country"/><br/>
        </form>
      </div>
    )
  

export default Form;