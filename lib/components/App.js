import React from 'react';
import StateApi from 'state-api';
import ArticleList from './ArticleList';
import axios from 'axios';


class App extends React.Component{
      
  state={authors:[],articles:[]};

  async componentDidMount(){
    const dataResponse=await axios.get('http://localhost:8080/data');
    const api =new StateApi(dataResponse.data);
    this.setState({
      authors:api.getAuthors(),
      articles:api.getArticles()
    });  
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