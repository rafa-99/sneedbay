"use strict";

const config = require("../server/js/config");

function settings(req, res)
{
	res.render('settings', {showSearchBar: true, config: config.loadedConfig});
};

function save(req, res)
{
	let newConfig = {
		'settings': {
			'nsfw_content': ((req.body.nsfw === "on") ? true : false),
			'port': ((!isNaN(parseInt(req.body.port))) ? parseInt(req.body.port) : undefined)
		}
	};

	config.createConfig(newConfig);
	config.loadConfig();

	res.redirect('/');
};

module.exports = {settings, save};
