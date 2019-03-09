import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';

class App extends React.Component{
      
  state=this.props.store.getState();

  getChildContext(){
    return {store:this.props.store};
  }
  static childContextTypes={
    store:PropTypes.object
  };
  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} store={this.props.store}/>
      </div>
    );
  }
}

export default App;