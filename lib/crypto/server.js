const { createServer } = require('http');
const { parse } = require('url');
const { createReadStream } = require('fs');
const { exportChallenge } = require('crypto').Certificate();
const server = createServer((req, res) => {
	const { url, method, headers } = req;
	
	if (url === '/index') {
		console.log('Home page');
		createReadStream('client.html').pipe(res);
	} else if (url !== '/favicon.ico'){
		console.log(`${method} ${headers.host + url}`);
		if (method === 'GET'){
			const param = parse(url, true).query;

			console.log(param);
			res.writeHead(200);
			res.end('resd');
		} else {
			let param = '';

			req.on('data', chunk => param += chunk);
			req.on('end', () => console.log(param));

			res.writeHead(200);
			res.end('yahoo');
		}
	}
	
}).listen(8080, () => {
	console.log('Server has started.');
});