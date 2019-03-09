import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';
import axios from 'axios';
import StateApi from 'state-api';
import config from 'config';


const serverRender=async()=>{
  const dataResponse= await axios.get(`http://${config.host}:${config.port}/data`);
  const api =new StateApi(dataResponse.data);
  const initialData={
    authors:api.getAuthors(),
    articles:api.getArticles()
  };  
  return ReactDOMServer.renderToString(<App initialData={initialData} />);
};

export default serverRender;
