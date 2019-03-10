import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

class App extends React.Component{
      
  state=this.props.store.getState();

  setSearchTerm=(term)=>{
    this.setState({
      searchTerm:term
    });
  }
  getChildContext(){
    return {store:this.props.store};
  }
  static childContextTypes={
    store:PropTypes.object
  };
  render() {
    let articles=this.state.articles;
    let searchTerm=this.state.searchTerm;
    if(searchTerm){
      articles=pickBy(articles,(value)=>{
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm}/>
        <ArticleList articles={articles} store={this.props.store}/>
      </div>
    );
  }

}

export default App;