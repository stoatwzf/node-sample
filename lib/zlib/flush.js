const { createGzip, flush } = require('zlib');
const { createServer } = require('http');

createServer((req, res) => {
	const output = createGzip();

	res.writeHead(200, { 'content-encoding': 'gzip'});
	output.pipe(res);
	setInterval(() => {
		output.write(`The current time is ${Date()}\n`, () => {
			output.flush();
		});
	}, 1000);
}).listen(1337);