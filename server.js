/* STEP 1 - load external resources*/
//for express
var express = require('express');
var bodyParser = require('body-parser');
var events = require('events');
var path = require('path');

//for the db
var mongoose = require('mongoose');
var config = require('./config');

//import router for decks
const {
    DeckssRouter
} = require('./decks/router');

/* STEP 2 - initialize the app*/
var app = express();

// use router for decks api call
app.use('/decks', DeckRouter);

// serves static files and uses json bodyparser
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());

app.use(cookieParser());
app.use(expressSession({
    secret: 'secret123',
    resave: true,
    saveUninitialized: true,
    activeDuration: 5 * 60 * 1000
}));

let server;
var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

// if (require.main === module) {
//   runServer().catch(err => console.error(err));
// }


//module.exports = {app, runServer, closeServer};
exports.app = app;
exports.runServer = runServer;
exports.closeServer = closeServer;
