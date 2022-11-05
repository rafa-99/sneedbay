"use strict";

// Imports
const fs = require('fs');
const path = require('path');
const { ensureFolder, envPaths } = require('./paths');

// Handling Variables
const indentation = '\t';
const configFolder = ensureFolder(path.join(envPaths.CONFIG, 'sneedbay'));
const defaultConfigPath = path.join(configFolder, 'config.json');
const defaultConfig = {
	'settings': {
		'nsfw_content': false,
		'port': undefined
	}
};
var loadedConfig = {};

// Functions
function createConfig(customConfig, configPath)
{
	const path = configPath || defaultConfigPath;
	const config = customConfig || defaultConfig;

	try
	{
		fs.writeFileSync(path, JSON.stringify(config, null, indentation), 'utf-8');
	} 

	catch (err)
	{
		console.log(err);
	}
}

function loadConfig(configPath)
{
	const path = configPath || defaultConfigPath;

	if (configPath && !fs.existsSync(path))
	{
		createConfig(defaultConfig, path);
	}

	try
	{
		this.loadedConfig = JSON.parse(fs.readFileSync(path));
	}

	catch (err)
	{
		console.log(err);
	}
}

module.exports = { loadConfig, defaultConfigPath, loadedConfig, createConfig };