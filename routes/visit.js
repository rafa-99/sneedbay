"use strict";

function visit(req, res)
{
	res.render('visit', {showSearchBar: true});
};

module.exports = visit;
