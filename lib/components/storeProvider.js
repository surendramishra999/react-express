import React from 'react';
import PropTypes from 'prop-types';

const storeProvider=(extraProps)=>(Component)=>{

  return class withStore extends React.Component{
      static contextTypes={
        store:PropTypes.object 
      };  
      static displayName=`${Component.name}Component`;
      render() {
        return (
          <Component {...this.props} {...extraProps(this.context.store,this.props)} store={this.context.store} />
        );
      }
  };
};

export default storeProvider;
