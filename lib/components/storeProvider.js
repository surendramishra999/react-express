import React from 'react';
import PropTypes from 'prop-types';

const storeProvider=(extraProps=()=>({}))=>(Component)=>{

  return class withStore extends React.PureComponent{
      static contextTypes={
        store:PropTypes.object 
      };  
      static displayName=`${Component.name}Component`;

      componentDidMount(){
        this.subscriptionId=this.context.store.subscribe(this.onStoreChange);
        this.context.store.startClock();
      }

      usedState=()=>{
        return extraProps(this.context.store,this.props);
      }

      state=this.usedState();
    
      onStoreChange=()=>{
        if(this.subscriptionId!=null){
          // this.forceUpdate();
          this.setState(this.usedState());
        }
      }
    
      componentWillUnmount(){
        this.context.store.unsubscribe(this.subscriptionId);
        this.subscriptionId=null;
      }

      render() {
        return (
          <Component {...this.props} {...this.usedState()} store={this.context.store} />
        );
      }
  };
};

export default storeProvider;
