import React from 'react';
import StateApi from 'state-api';
import {data} from '../testData';
import ArticleList from './ArticleList';


class App extends React.Component{
      
  constructor(){
    super();
    const api =new StateApi(data);
    this.state={
      authors:api.getAuthors(),
      articles:api.getArticles()
    };
  }

  articleActions={
    lookupAuthor: authorId=>this.state.authors[authorId]
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} articleActions={this.articleActions}/>
      </div>
    );
  }
}

export default App;