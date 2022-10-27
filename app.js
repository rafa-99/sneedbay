"use strict";

// handling imports
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

// handling variables
const app = express();
const {	ensureFolder, envPaths } = require('./server/js/paths');
const loadConfig = require('./server/js/config').loadConfig;
const configFolder = ensureFolder(path.join(envPaths.CONFIG, 'sneedbay'));
const configPath = path.join(configFolder, 'config.json');
const PORT = module.exports.PORT = process.env.PORT || 3000;
var config = require('./server/js/config').config;

// loading configurations
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
config = loadConfig(configPath);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

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
