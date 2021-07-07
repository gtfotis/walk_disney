'use strict';

const http = require('http');
const hostname = '127.0.0.1';

const port = 3000;
const express = require('express');
const app = express();
const session = require('express-session')

app.use(session({
    secret: 'strawberry banana',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const es6renderer = require('express-es6-template-engine');

app.engine('html', es6renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`The server is running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index');
const activitiesController = require('./routes/activities');
const itineraryController = require('./routes/itinerary');
const parkSelectorController = require('./routes/park_selector');
const userController = require('./routes/users');
const errorController = require('./routes/404');

app.use('/', rootController);
app.use('/activities', activitiesController);
app.use('/itinerary', itineraryController);
app.use('/park_selector', parkSelectorController);
app.use('/users', userController);
app.use('*', errorController);
