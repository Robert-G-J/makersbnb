const express = require('express');
const exphbs  = require('express-handlebars');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./server/models/index');
const app = express();
const Listing = db.sequelize.import(__dirname + '/server/models/listing');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'server/views'));
// add middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

var makersbnbListings;
Listing.all().then(listings => {
  makersbnbListings = listings;
});

app.get('/', (req, res) => {
  res.redirect('/listings');
});
    
app.get('/listings', (req, res) => {
  res.render('index', {listings: makersbnbListings});
});

app.get('/listings/new', (req, res) => {
  res.render('listing/new');
});

app.post('/listings/new', (req, res) => {
  Listing.create({
    title: req.body.title,
    details: req.body.details,
  });
  res.redirect('/');
});

module.exports = app;
