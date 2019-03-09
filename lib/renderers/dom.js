import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import StateApi from 'state-api';

const store =new StateApi(window.initialData);
class Dom extends React.Component {
  render() {
    return (<App store={store}/>);
  }
}

ReactDOM.hydrate(<Dom/>, document.getElementById('root'));