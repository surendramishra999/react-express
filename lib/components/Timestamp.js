import React from 'react';
import StoreProvider from './storeProvider';

class Timestamp extends React.Component{

  shouldComponentUpdate(nextProps,nextState){
    const currentTime= this.timeDisplay(this.props.timestamp);
    const NewTime=this.timeDisplay(nextProps.timestamp);
    return currentTime!==NewTime;
  }
  
  render() {
    return (
      <div>
        { this.timeDisplay(this.props.timestamp)}
      </div>
    );
  }

  timeDisplay=(timestamp)=>{
    return timestamp.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  }
}

const extraProps=(store)=>{
  return {
    timestamp:store.getState().timestamp ,
  };
};
  
export default StoreProvider(extraProps)(Timestamp);