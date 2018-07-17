const { createServer } = require('http');
const { connect } = require('net');
const { parse } = require('url');
const proxy = createServer((req, res) => {});

proxy.on('connect', (req, cltSocket, head) => {
	const srvSocket = connect(8181, '127.0.0.1', () => {
		cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
		srvSocket.write(head);
		srvSocket.pipe(cltSocket);
		cltSocket.pipe(srvSocket);
	});

});
proxy.listen(8080);