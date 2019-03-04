import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData';
import ArticleList from './ArticleList';


class App extends React.Component{
      
  constructor(){
    super();
    const api =new DataApi(data);
    this.state={
      authors:api.getAuthors(),
      articles:api.getArticles()
    };
  }

  articleActions=authorId=>{
    return this.state.authors[authorId];
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