import React from 'react';
import PropTypes from 'prop-types';


const StoreProvider=(Component)=>{
  const withStore=(props,{store})=>{
    return (
      <Component {...props} store={store} />
    );
  };

  
  withStore.contextTypes={
    store:PropTypes.object
  };

  return withStore;

};

export default StoreProvider;



