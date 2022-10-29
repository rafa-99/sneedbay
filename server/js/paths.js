"use strict";

const fs = require('fs');
const path = require('path');
const os = require('os');

function ensureFolder(folder)
{
	if (!fs.existsSync(folder))
	{
		fs.mkdirSync(folder, { recursive: true });
	}
	return folder;
}

const envPaths = {
	'linux': function () {
		return {
			HOME: os.homedir(),
			DATA: process.env.XDG_DATA_HOME || ensureFolder(path.join(os.homedir(), '.local', 'share')),
			CONFIG: process.env.XDG_CONFIG_HOME || ensureFolder(path.join(os.homedir(), '.config')),
			CACHE: process.env.XDG_CACHE_HOME || ensureFolder(path.join(os.homedir(), '.cache'))
		}
	},

	'win32': function () {
		return {
			HOME: os.homedir(),
			DATA: process.env.APPDATA || ensureFolder(path.join(os.homedir(), 'AppData', 'Roaming')),
			CONFIG: process.env.APPDATA || ensureFolder(path.join(os.homedir(), 'AppData', 'Roaming')),
			CACHE: process.env.TEMP || process.env.TMP || path.join(process.env.LOCALAPPDATA, 'Temp') || ensureFolder(path.join(os.homedir(), 'AppData', 'Local', 'Temp'))
		}
	}

} [os.platform()]();

module.exports = {ensureFolder, envPaths};