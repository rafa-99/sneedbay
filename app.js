"use strict";

// handling imports
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
var config = require('./server/js/config');

// handling variables
const app = express();
const configPath = config.defaultConfigPath;
const PORT = module.exports.PORT = process.env.PORT || 3000;

// loading configurations
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
config.loadConfig(configPath);

// routes management
const home = require("./routes/home");
const info = require("./routes/info");
const search = require("./routes/search");
const visit = require("./routes/visit");
const settings = require("./routes/settings");

app.get('/', home);
app.get('/info', info);
app.get('/visit', visit);
app.get('/settings', settings);
app.post('/search', search);

// app start
app.listen(PORT, () => console.log("Server running on port " + PORT));
