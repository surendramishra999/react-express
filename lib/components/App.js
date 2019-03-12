import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

class App extends React.Component{
      
  state=this.props.store.getState();

  getChildContext(){
    return {store:this.props.store};
  }

  componentDidMount(){
    this.subscriptionId=this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  onStoreChange=()=>{
    this.setState(this.props.store.getState());
  }

  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId);
  }

  static childContextTypes={
    store:PropTypes.object
  };
  render() {
    let articles=this.state.articles;
    let searchTerm=this.state.searchTerm;
    const searchRE=new RegExp(searchTerm,'i');
    if(searchTerm){
      articles=pickBy(articles,(value)=>{
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles}/>
      </div>
    );
  }

}

export default App;