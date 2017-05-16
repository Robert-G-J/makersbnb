const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//create express app
const app = express();

// add middleware
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.set('view engine', 'handlebars');
app.set('/views', path.join(__dirname,'/views'));

// routes+controllers
app.get('/listing', (req, res) => {
  res.render('index');
});

app.get('/listing/new', (req, res) => res.status(200).send({
  message: 'This is the new listings page',
}));

app.post('/listing/new', (req, res) => res.status(200).send({

}))
module.exports = app;
