/**************************************
Lee Haney
Team Treehouse: JavaScript Full Stack Techdegree
Project 6: Static Node.js and Express Site 
**************************************/

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// Import the correct routes
const routes = require('./routes.js');
app.use(routes);

/* 
If the user requests a page that doesn't exist:
- Set the status code and error message on the error object. 
- Pass the Error object to the error handling method, by calling next().
*/
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
})

// Render the error pug file (to error.html for browser) with the correct information in it.
app.use( (err, req, res, next) => {
    res.locals.error = err;
    res.status(500);
    res.render('error');
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${3000}`);
})
