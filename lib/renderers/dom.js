import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

const initialData={
  articles:{},
  authors:{}
};
class Dom extends React.Component {
  render() {
    return (
      <App initialData={initialData}/>
    );
  }
}

ReactDOM.hydrate(<Dom/>, document.getElementById('root'));