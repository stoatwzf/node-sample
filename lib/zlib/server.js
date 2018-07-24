const { createDeflate, createGzip } = require('zlib');
const { createServer } = require('http');
const { createReadStream } = require('fs');

createServer((req, res) => {
	const raw = createReadStream('index.html');
	let acceptEncoding = req.headers['accept-encoding'];

	if (!acceptEncoding) acceptEncoding = '';
	if (/\bdeflate\b/.test(acceptEncoding)){
		res.writeHead(200, { 'Content-Encoding': 'deflate'});
		raw.pipe(createDeflate()).pipe(res);
	} else if (/\bgzip\b/.test(acceptEncoding)){
		res.writeHead(200, { 'Content-Encoding': 'gzip'});
		raw.pipe(createGzip()).pipe();
	} else {
		res.writeHead(200, {});
		raw.pipe(res);
	}
}).listen(1337);