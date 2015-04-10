/* jshint node: true, unused: true, undef: true */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/login', function (request, response) {
    response.render('login.ejs', { error: false });
});

app.post('/login', function (request, response) {
    response.render('login.ejs', { error: true, email: request.body.email });
});

app.get('/welcome', function (request, response) {
    response.render('welcome.ejs', { name: request.query.name });
});

var server = app.listen(3000);