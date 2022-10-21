"use strict";

function getTrackers()
{
	let tr = '&tr=' + encodeURIComponent('udp://tracker.coppersurfer.tk:6969/announce');
	tr += '&tr=' + encodeURIComponent('udp://tracker.openbittorrent.com:6969/announce');
	tr += '&tr=' + encodeURIComponent('udp://9.rarbg.to:2710/announce');
	tr += '&tr=' + encodeURIComponent('udp://9.rarbg.me:2780/announce');
	tr += '&tr=' + encodeURIComponent('udp://9.rarbg.to:2730/announce');
	tr += '&tr=' + encodeURIComponent('udp://tracker.opentrackr.org:1337');
	tr += '&tr=' + encodeURIComponent('http://p4p.arenabg.com:1337/announce');
	tr += '&tr=' + encodeURIComponent('udp://tracker.torrent.eu.org:451/announce');
	tr += '&tr=' + encodeURIComponent('udp://tracker.tiny-vps.com:6969/announce');
	tr += '&tr=' + encodeURIComponent('udp://open.stealth.si:80/announce');
	return tr;
}

function makeMagnet(info_hash, name)
{
	return 'magnet:?xt=urn:btih:' + info_hash + '&dn=' + encodeURIComponent(name) + getTrackers();
}

function round_to_precision(x, precision)
{
	let y = +x + (precision === undefined ? 0.5 : precision / 2);
	let sz = y - (y % (precision === undefined ? 1 : +precision)) + '';
	if (sz.indexOf('.') == -1) return sz;
	else return sz.substring(0, sz.indexOf('.') + 3);
}

function bytesToSize(size)
{
	if (size >= 1125899906842624) return round_to_precision(size / 1125899906842624, 0.01) + ' PiB';
	if (size >= 1099511627776) return round_to_precision(size / 1099511627776, 0.01) + ' TiB';
	if (size >= 1073741824) return round_to_precision(size / 1073741824, 0.01) + ' GiB';
	if (size >= 1048576) return round_to_precision(size / 1048576, 0.01) + ' MiB';
	if (size >= 1024) return round_to_precision(size / 1024, 0.01) + ' KiB';
	return size + ' B';
}

function getDate(date)
{
	let dateObj = new Date(date * 1000);
	let m = dateObj.getUTCMonth() + 1;
	let d = dateObj.getUTCDate();
	let mm;
	let dd;
	if (m < 10) mm = '0' + m
	else mm = m;
	if (d < 10) dd = '0' + d
	else dd = d;
	return dateObj.getUTCFullYear() + '-' + mm + '-' + dd;
}

function getCategory(cat)
{
	let category = "";

	if (cat > 100 && cat < 200)
	{
		category = "audio";
	} else if (cat > 200 && cat < 300) {
		category = "video";
	} else if (cat > 300 && cat < 400) {
		category = "apps";
	} else if (cat > 400 && cat < 500) {
		category = "games";
	} else if (cat > 500 && cat < 600) {
		category = "porn";
	} else {
		category = "other";
	}

	let subcategory = {
		101: 'music',
		102: 'audio books',
		103: 'sound clips',
		104: 'flac',
		199: 'other',
		201: 'movies',
		202: 'movies dvdr',
		203: 'music videos',
		204: 'movie clips',
		205: 'tv-shows',
		206: 'handheld',
		207: 'hd movies',
		208: 'hd tv-shows',
		209: '3d',
		299: 'other',
		301: 'windows',
		302: 'mac/apple',
		303: 'unix',
		304: 'handheld',
		305: 'ios(ipad/iphone)',
		306: 'android',
		399: 'other os',
		401: 'pc',
		402: 'mac/apple',
		403: 'psx',
		404: 'xbox360',
		405: 'wii',
		406: 'handheld',
		407: 'ios(ipad/iphone)',
		408: 'android',
		499: 'other os',
		501: 'movies',
		502: 'movies dvdr',
		503: 'pictures',
		504: 'games',
		505: 'hd movies',
		506: 'movie clips',
		599: 'other',
		601: 'e-books',
		602: 'comics',
		603: 'pictures',
		604: 'covers',
		605: 'physibles',
		699: 'other'
	}[cat];

	return category + " / " + ((subcategory) ? subcategory : "unavailable");
}

module.exports = {makeMagnet, bytesToSize, getDate, getCategory};