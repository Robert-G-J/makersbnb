MakersBNB
-----------

A (very trusting) implementation of Airbnb, written in Node.

![MakersBNB Screenshot](media/screenshot.png)

Users can create, book, and destroy listings.

## Installation

Node:
If you haven't installed Node, we recommend using [nvm](https://github.com/creationix/nvm).

Project files:
1. `git clone git@github.com:Robert-G-J/makersbnb.git`.
2. `cd path/to/dir` then `npm install`.

PostgreSQL:
1. Install PostgreSQL (instructions [here](https://www.postgresql.org/download/)).
2. Initialize database: `cd path/to/makersbnb/dir` then `sequelize db:migrate`.

## Usage

Option 1: Try it out on [Heroku](http://ripoffbnb.herokuapp.com/listings).

Option 2: Host it locally: `npm run start:dev`

## Challenges

1. New to Node: This was our first project using full-stack JS, and we spent a lot of time getting to grips with the ecosystem. But we managed to create a respectable MVP with an entirely new stack in 5 days.
2. Sequelize: We did not find the documentation beginner-friendly. Sequelize was also our first experience working with callbacks and promises.
3. Handlebars templating: In the end, we could not configure a custom helper to fix the formatting of booking dates on the page.
4. Github collaboration: This was our first real experience with issues, branches, and code reviews.
5. Testing: We spent ~6 hours trying to set up front-end testing, but couldn't get it working.

## Collaborators

* [Robert Jones](https://github.com/Robert-G-J)
* [Alex Chalk](https://github.com/adc17)
* [Jon Elliot](https://github.com/jonathanelliot)
* [Simon Tanner](https://github.com/SimonTanner)

## Technologies

* Web framework: [Express](http://expressjs.com/)
* ORM: [Sequelize](https://github.com/sequelize/sequelize)
* Database: [PostgreSQL](https://www.postgresql.org/)
* Templating: [Handlebars](http://handlebarsjs.com/expressions.html)

User Stories
------------
Listing:
```
As a hard-up room-letter (or kingpin landlord),
So that I can get a little extra income,
I want to list a room for let.
```
Book Listings:
```
As a traveller,
So I can stay in local place,
I want to book a listing.

As a user,
To avoid booking stress,
I want double-booking a room to be impossible

As a room-letter,
So that I can tidy up before a traveller arrives,
I want to know when a room has been booked.
```

## Other Notes

A group project during week six of the [Makers Academy](http://www.makersacademy.com) Bootcamp.