const { createServer } = require('http');
const server = createServer((req, res) => {
	console.log('server stat');
	res.write(';123');
	res.end('yahoo');
});

server.listen(8181);