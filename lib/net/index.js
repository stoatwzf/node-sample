const net = require('net');
const server = net.createServer();

server.on('error', err => {
	throw err;
});
server.on('close', () => {});
server.on('connection', c => {
	console.log('client connected');
	c.on('end', () => {
		console.log('client disconnected');
	});
	c.write('hello');
	c.pipe(c);
});
server.on('listening', () => {});
server.listen(8124, () => {
	console.log('server bound', server.address());
	server.getConnections((err, count) => {
		console.log(count);
	});
});
// server.close(() => {});