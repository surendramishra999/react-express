import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state={answer:'42'};

  AsyncAnswer=()=>{
    return Promise.resolve(46);
  }

  async componentDidMount(){
    this.setState({
      answer : await this.AsyncAnswer()
    });
  }
  render() {
    return (
      <div>Hello React {this.state.answer}</div>
    );
  }
}

ReactDOM.render(<App/> , document.getElementById('root'));