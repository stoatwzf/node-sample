const { request } = require('http');
const options = {
	hostname: '127.0.0.1',
	port: 8080,
	method: 'CONNECT'
};
const req = request(options);

req.on('connect', (res, socket, head) => {
	socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
	socket.on('data', chunk => {
		console.log(`${chunk}`);
	});
});
req.on('continue', () => {
	console.log('continue');
});
req.on('information', () => {
	console.log('information');
});
req.on('response', () => {
	console.log('response');
});
req.on('socket', () => {
	console.log('socket');
});
req.on('timeout', () => {
	console.log('timeout');
});
req.end();
