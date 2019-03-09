import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';


class Dom extends React.Component {
  render() {
    return (
      <App initialData={window.initialData}/>
    );
  }
}

ReactDOM.hydrate(<Dom/>, document.getElementById('root'));