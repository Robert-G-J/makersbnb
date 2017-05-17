'use strict'

const express = require('express');
const exphbs  = require('express-handlebars');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
require('./server/models/index').db;
const listingdb = require('./server/models/listing');
//create express app
const app = express();
const testApp = require('./test');
const Listing = sequelize.import(__dirname + "server/models/listing")

var name;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'server/views'));
// add middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


app.get('/', (req, res) => {
    res.render('home', {title: 'froggy', data: testApp.getData()});

});

  Listing.all().then(listings => { 

  });
  console.log(listings);
// routes+controllers
app.get('/listing', (req, res) => {
  res.render('listing', {name: name});
});

app.get('/listing/new', (req, res) => {
  res.render('listing/new');
});

app.post('/listing', (req, res) => {
  listingdb.create({
    title: "aasasasasas",
    details: "fdfdfdffdfdfd",
  });
  // name = req.body.name;
  res.redirect('listing');
});

module.exports = app;
