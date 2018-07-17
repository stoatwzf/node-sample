const { createServer } = require('http');
const server = createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/plain',
		'Trailer': 'Content-MD5'
	});
	res.addTrailers({
		'Content-MD5': '1238869'
	});
	console.log(res.finished);
	console.log(res.getHeader('Content-Type'));
	console.log(res.getHeaderNames());
	console.log(res.getHeaders());
	console.log(res.hasHeader('Content-Type'));
	console.log(res.headersSent);
	res.removeHeader('Content-Type');
	console.log(res.sendDate);
	res.setHeader('Content-Type', 'text/plain');
	res.setTimeout(2000, () => {});
	console.log(res.connection, res.socket);
	res.statusCode = 400;
	res.on('close', () => {});
	res.on('finish', () => {});
	res.end('yahoo');
});

server.listen(8383);
server.on('checkContinue', () => {});
server.on('checkExpectation', () => {});
server.on('clientError', () => {});
server.on('close', () => {});
server.on('connect', () => {});
server.on('request', (req, res) => {});
server.on('upgrade', (req, socket, head) => {});
server.close(() => {});
console.log(server.listening);
console.log(server.maxHeadersCount);
server.setTimeout(2000, () => {});
console.log(server.timeout);
console.log(server.keepAliveTimeout);