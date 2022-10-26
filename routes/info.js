"use strict";

function info(req, res)
{
	res.render('info', {showSearchBar: true});
};

module.exports = info;
