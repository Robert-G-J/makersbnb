//Express, middleware
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//Template rendering
const exphbs  = require('express-handlebars');

//Path
const path = require('path');

//Important variable assignments
const app = express();
const db = require('./server/models/index');
const Listing = db.sequelize.import(__dirname + '/server/models/listing');

//Template Rendering settings
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

//Middleware settings
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static('public'));

//Sequelize data assignment
var makersbnbListings;

//Routes
app.get('/', (req, res) => {
  res.redirect('/listings');
});

app.get('/listings', (req, res) => {
  Listing.all().then(listings => {
    makersbnbListings = listings;
  })
    .then(function() {
      res.render('index', {listings: makersbnbListings});
    });
});

app.get('/listings/new', (req, res) => {
  res.render('listing/new');
});

app.post('/listings/new', (req, res) => {
  Listing.create({
    title: req.body.title,
    details: req.body.details,
    location: req.body.location,
  })
    .then(function() {
      res.redirect('/listings');
    });
});

app.post('/listings/book/:listingId', (req, res) => {

    Listing.update( {
      booking_date: req.body.booking_date
    },
    {where: { id: req.params.listingId}})

  .then( function(){
    res.redirect('/listings');
  })
});

module.exports = app;
