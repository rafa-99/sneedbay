"use strict";

// Imports
const fs = require('fs');
const path = require('path');
const { ensureFolder, envPaths } = require('./paths');

// Handling Variables
const configFolder = ensureFolder(path.join(envPaths.CONFIG, 'sneedbay'));
const defaultConfigPath = path.join(configFolder, 'config.json');
var loadedConfig = {};

function createConfig()
{
	const defaultConfig = {
		'settings': {
			'nsfw_content': false
		}
	};

	try
	{
		fs.writeFileSync(configPath, JSON.stringify(defaultConfig), 'utf-8');
	} 

	catch (err)
	{
		console.log(err);
	}
}

function loadConfig(configPath)
{
	try
	{
		if (!fs.existsSync(configPath))
		{
			createConfig(configPath, defaultConfig);
		}

		this.loadedConfig = JSON.parse(fs.readFileSync(configPath));
	}

	catch (err)
	{
		console.log(err);
	}
}

module.exports = { loadConfig, defaultConfigPath, loadedConfig };