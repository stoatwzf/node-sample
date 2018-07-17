const { Agent, request } = require('http');
const keepAliveAgent = new Agent({
	keepAlive: true
});
const options = {
	hostname: '127.0.0.1',
	port: 8383,
	method: 'GET',
	agent: keepAliveAgent,
	headers: {
		'Content-Type': 'text/plain'
	}
}
const req = request(options);

req.on('response', res => {
	res.on('data', chunk => {
		console.log(`${chunk}`);
	});
	res.on('end', () => {
		console.log('The End.')
	});
});
req.on('abort', () => {
	console.log('abort');
});
req.on('connect', (res, socket, head) => {
	socket.on('data', chunk => {
		console.log(`${chunk}`);
	});
});
req.on('ontinue', () => {});
req.on('information', () => {});
req.on('socket', () => {});
req.on('timeout', () => {});
req.on('upgrade', (res, socket, upgradeHead) => {
	socket.end();
	process.exit(0);
});


req.abort();
req.flushHeaders();
console.log(req.aborted);
console.log(req.connection);
console.log(req.getHeader('Content-Type'));
console.log(req.maxHeadersCount);
req.removeHeader('Content-Type');
req.end();

/*const socket = keepAliveAgent.createConnection(options, (err, stream) => {});
keepAliveAgent.keepSocketAlive(socket);
keepAliveAgent.reuseSocket(socket, req);
keepAliveAgent.destory();
console.log(keepAliveAgent.freeSockets);
console.log(keepAliveAgent.getName(options));
console.log(keepAliveAgent.maxFreeSockets);
console.log(keepAliveAgent.maxSockets);
console.log(keepAliveAgent.requests);
console.log(keepAliveAgent.sockets);*/


