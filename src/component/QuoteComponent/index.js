import React from 'react' ;
import './style.css'


const QuoteComp = (props) => (
      <div className="QuoteComp">
        <h1>City Weather <span>finder</span></h1>
        <p className="time">{props.curTime}</p>
        <p>Find out the most recent weather conditions of your city.</p>
      </div>
    )

export default QuoteComp;