import React from 'react';
import StoreProvider from './storeProvider';

class Timestamp extends React.PureComponent{

  render() {
    return (
      <div>
        { this.props.timeStampDisplay}
      </div>
    );
  }

  static timeDisplay=(timestamp)=>{
    return timestamp.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  }
}

const extraProps=(store)=>{
  return {
    timeStampDisplay:Timestamp.timeDisplay(store.getState().timestamp) ,
  };
};
  
export default StoreProvider(extraProps)(Timestamp);