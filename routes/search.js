"use strict";

const apibay = require('../server/js/apibay');
const template = require('../server/js/template');

async function search(req, res)
{
	let query = req.body.search;
	let results = await apibay.hit(query);
	res.render('result', {query: query, results: results, functions: template});
};

module.exports = search;
