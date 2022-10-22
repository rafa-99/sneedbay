"use strict";

const https = require('https');

const server = 'https://apibay.org';

async function getRequest(url)
{
	let promise = new Promise( resolve => {
		let data = '';

		https.get(url, res => {
			res.on('data', chunk => {data += chunk});
			res.on('end', () => resolve(data));
		});
	});

	return await promise;
}

async function hit(query)
{
	return JSON.parse(await getRequest(server + '/q.php?q=' + encodeURI(query)));
}

module.exports = {hit};
