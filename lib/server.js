import express from 'express';
import config from './config';
import serverRender from './serverRender';
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
  const answers=serverRender();
  res.render('index',{answers});
});
app.listen(config.port, function listenHandler() {
  console.info('running on port:' + config.port);
});
