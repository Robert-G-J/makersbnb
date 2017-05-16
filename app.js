const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.get('/listing', (req, res) => {
  res.send('This is the listings page')
});

app.get('/listing/new', (req, res) => res.status(200).send({
  message: 'This is the new listings page',
}));

app.post('/listing/new', (req, res) => res.status(200).send({

}))
module.exports = app;
