/**
 * socket server
 */
const { createServer } = require('net');
const server = createServer();

server.on('connection', socket => {
	socket.pipe(process.stdout);
	socket.write('data from server');
});
server.listen(3000, () => {
	console.log(`server is on ${JSON.stringify(server.address())}`);
});