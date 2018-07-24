const { createGunzip, createInflate } = require('zlib');
const { get } = require('http');
const { createWriteStream } = require('fs');
const client = get({
	host: '127.0.0.1',
	port: '1337',
	path: '/',
	headers: {
		'Accept-Encoding': 'gzip,deflate'
	}
});

client.on('response', res => {
	const output = createWriteStream('example.html');

	switch (res.headers['content-encoding']){
		case 'gzip':
			res.pipe(createGunzip()).pipe(output);
			break;
		case 'deflate':
			res.pipe(createInflate()).pipe(output);
			break;
		default:
			res.pipe(output);
			break;
	}
});