"use strict";

const axios = require('axios');
const server = 'https://apibay.org';

async function getRequest(url)
{
	return await axios.get(url);
}

async function hit(query)
{
	return await getRequest(server + '/q.php?q=' + encodeURI(query));
}

module.exports = {hit};
