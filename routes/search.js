"use strict";

const apibay = require('../server/js/apibay');
const config = require('../server/js/config');
const template = require('../server/js/template');

async function search(req, res)
{
	let query = req.body.search;
	let results = await apibay.hit(query);

	// Filter NSFW Content
	if (!config.loadedConfig.settings.nsfw_content)
	{
		results = Array.prototype.filter.call(results, result => {

			let category = parseInt(result.category);

			if ( !(category > 500 && category < 600) )
			{
				return result;
			}

		});
	}

	res.render('result', {query: query, results: results, functions: template, showSearchBar: true});
};

module.exports = search;
