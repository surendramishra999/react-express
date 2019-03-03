import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('index',{answer:'first template3890'});
});
app.listen(config.port, function listenHandler() {
  console.info('running on port:' + config.port);
});