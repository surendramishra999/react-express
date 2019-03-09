import React from 'react';
import StateApi from 'state-api';
import ArticleList from './ArticleList';
import axios from 'axios';
import config from 'config';


class App extends React.Component{
      
  state={authors:this.props.initialData.authors,articles:this.props.initialData.articles};

  async componentDidMount(){
    const dataResponse=await axios.get(`http://${config.host}:${config.port}/data`);
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