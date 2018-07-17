const { createServer, request } = require('http');
const server = createServer((req, res) => {
	res.writeHead(200, {
		'Conten-Type': 'text/plain'
	});
	res.end('okay');
});

server.on('upgrade', (req, socket, head) => {
	socket.writeHead('HTTP/1.1 101 web Socket Protocol Handshake\r\n' + 'Upgrade: WebSocket\r\n' + 'Connection: Upgrade\r\n');
	socket.pipe(socket);
});
server.listen(1337, '127.0.0.1', () => {
	const options = {
		port: 1337,
		hostname: '127.0.0.1',
		headers: {
			'Connection': 'Upgrade',
			'Upgrade'; 'websocket'
		}
	};
	const req = http.request(options);

	req.end();
	req.on('upgrade', (res, socket, upgradeHead) => {
		console.log('got upgraded');
		socket.end();
		process.exit(0);
	});
});