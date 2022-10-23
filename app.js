"use strict";

// handling imports
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const PORT = module.exports.PORT = process.env.PORT || 3000;

// set the public folder to public acess and added a body parser
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// routes management
const home = require("./routes/home");
const info = require("./routes/info");
const search = require("./routes/search");
const visit = require("./routes/visit");

app.get('/', home);
app.get('/info', info);
app.get('/visit', visit);
app.post('/search', search);

// app start
app.listen(PORT, () => console.log("Server running on port " + PORT));
