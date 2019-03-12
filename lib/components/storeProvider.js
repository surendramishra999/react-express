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
    
      onStoreChange=()=>{
        if(this.subscriptionId!=null){
          this.forceUpdate();
        }
      }
    
      componentWillUnmount(){
        this.context.store.unsubscribe(this.subscriptionId);
        this.subscriptionId=null;
      }

      render() {
        return (
          <Component {...this.props} {...extraProps(this.context.store,this.props)} store={this.context.store} />
        );
      }
  };
};

export default storeProvider;
