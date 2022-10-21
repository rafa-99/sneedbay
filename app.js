"use strict";

// handling imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

// set the public folder to public acess and added a body parser
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// set the view engine to ejs
app.set('view engine', 'ejs');

// routes management
const home = require("./routes/home");
const info = require("./routes/info");
const search = require("./routes/search");
const settings = require("./routes/settings");

app.get('/', home);
app.get('/info', info);
app.get('/settings', settings);
app.post('/search', search);

// app start
app.listen(PORT);
console.log('Server is listening on port ' + PORT);
