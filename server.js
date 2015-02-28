/**
 * The main app.js
 *
 * todo:
 *      - figure out how login should work
 */
var express = require('express');
var session = require('express-session');

var consolidate = require('consolidate');
//var passport = require('passport');
//require('./config/passport')(passport);
//var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var router = require('./routers/router');

// Globals
var port = process.env.PORT || 5000;
//var dbUrl = 'mongodb://localhost/glassdoor_test';

// Locals: Application local variables are provided to all templates rendered within the application.
// This is useful for providing helper functions to templates, as well as app-level data.
app.locals.moment = require('moment');

/**
 * express setup
 */
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ // to get information from html forms
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'wowsuchsecret',
    resave: true,
    saveUninitialized: true
}));

/**
 * Connection to MongoDB
 */
//mongoose.connect(dbUrl);

/**
 * Bootstrap View Engine
 */
app.engine('html', consolidate.jade); // mapping the jade engine to .html files
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

/**
 * Bootstrap Passport
 */
//app.use(passport.initialize());
//app.use(passport.session());

/**
 * Bootstrap the Router
 */
app.use('/', router);

/**
 * Start the App
 */
app.listen(port, function () {
    console.log('Listening on port %d', port);
});