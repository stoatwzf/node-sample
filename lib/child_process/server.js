const { fork } = require('child_process');
const { createServer } = require('net');
const subprocess = fork('subprocess.js');
const server = createServer();

server.on('connection', socket => {
	socket.end('do process');
});
server.listen(1337, () => {
	subprocess.send('server', server);
});
