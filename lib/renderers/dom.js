import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

class Dom extends React.Component {
  render() {
    return (<App/>);
  }
}

ReactDOM.render(<Dom/>, document.getElementById('root'));