var express = require('express');
var fs = require('fs');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();


/*
 * SERVER INITIALISATION
 */
var app = module.exports = express();

app.use(jsonParser);

/*
 * SERVICES
 */
require('./services')(app, fs);