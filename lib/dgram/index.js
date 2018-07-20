const { createSocket } = require('dgram');
const server = createSocket('udp4');

server.on('error', err => {
	throw err;
});
server.on('message', (msg, rinfo) => {
	console.log(msg);
});
server.on('listening', () => {
	console.log('server listenning');
});
server.bind(41234);