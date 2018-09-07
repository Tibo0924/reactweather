import React, { Component } from 'react' ;
import './style.css'

class QuoteComp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      curTime: null,  
      quote: null,
      title: null,
    }
  }

  componentDidMount() {
    this.fetchQuote()
    this.updateTime()
  }

  fetchQuote = () => (
    fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then(data => data.json())
      .then(data => this.handleQuote(data))
  )

  updateTime = () => {
    setInterval(
      function() {
        this.setState({
          curTime: new Date().toLocaleTimeString()
        });
      }.bind(this),
      1000
    );
  }

  handleQuote = (data) => {
    this.setState({
      quote: data[0].content,
      title: data[0].title,
    })
  }

  render() {
    return ( 
      <div className="QuoteComponent">
        <div className="time">{this.state.curTime}</div>
        <div 
          className="quoteContainer" 
          dangerouslySetInnerHTML={{__html: this.state.quote}}
          >
        </div>
          <p>{this.state.title}</p>
          <button onClick={this.fetchQuote}>More quotes!</button>
      </div>
    )
  }  
}

export default QuoteComp;