import React from 'react' ;
import './style.css'



class QuoteComp extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      curTime: null,  
      quote: null,

    }
  }



  

  // handleQuote
  handleQuote = (data) => {
    console.log(data)
    this.setState({
      quote: data[0].content,
    })
  }
  // APi Call for  quotes
  componentDidMount() {
    fetch (`
        https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`
    )
    .then(data => data.json())
    .then(data => this.handleQuote(data))

  }
  

  componentWillMount() {
    setInterval(
      function() {
        this.setState({
          curTime: new Date().toLocaleTimeString()
        });
      }.bind(this),
      1000
    );
  }


render() {
  return ( 
      <div className="QuoteComponent">
        <h2>{this.state.curTime}</h2>
        <div 
          className="quoteContainer" 
          dangerouslySetInnerHTML={{__html: this.state.quote}}
          >
        </div>
      </div>
  ) }

  
}
export default QuoteComp;