"use strict";

function settings(req, res)
{
	res.render('settings', {showSearchBar: true});
};

module.exports = settings;
