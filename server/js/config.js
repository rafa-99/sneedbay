"use strict";

const fs = require('fs');

const defaultConfig = {
	'settings': {
		'nsfw_content': false
	}
};
var config = {};

function createConfig(configPath, data)
{
	fs.writeFileSync(configPath, JSON.stringify(data), 'utf-8');
}

function loadConfig(configPath)
{
	if ( !fs.existsSync(configPath) )
	{
		createConfig(configPath, defaultConfig);
	}
	
	return JSON.parse(fs.readFileSync(configPath));
}


module.exports = {loadConfig, config};