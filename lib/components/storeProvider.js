import React from 'react';
import PropTypes from 'prop-types';

const storeProvider=(extraProps)=>(Component)=>{

  return class withStore extends React.Component{
      static contextTypes={
        store:PropTypes.object 
      };  
      static displayName=`${Component.name}Component`;
      render() {
        const extraProp=extraProps(this.context.store,this.props.article);
        return (
          <Component {...this.props} {...extraProp} store={this.context.store} />
        );
      }
  };
};

export default storeProvider;
