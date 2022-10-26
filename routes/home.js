"use strict";

function home(req, res)
{
	res.render('index', {showSearchBar: false});
};

module.exports = home;
