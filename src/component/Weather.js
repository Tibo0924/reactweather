import React from 'react';

class Weather extends React.Component {

  render() {
    return <div>
        <h1>{this.props.temperature}</h1>
        <h1>{this.props.city}</h1>
        <h1>{this.props.country}</h1>
        <h1>{this.props.humidity}</h1>
        <h1>{this.props.description}</h1>
      </div>;
  }

}

export default Weather;