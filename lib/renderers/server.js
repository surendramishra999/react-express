import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';
import axios from 'axios';
import StateApi from 'state-api';
import config from 'config';


const serverRender=async()=>{
  const dataResponse= await axios.get(`http://${config.host}:${config.port}/data`);
  const store =new StateApi(dataResponse.data);
  const initialMarkup=ReactDOMServer.renderToString(<App store={store}/>);
  return {initialMarkup:initialMarkup,initialData:dataResponse.data};
};

export default serverRender;
