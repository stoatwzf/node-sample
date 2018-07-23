const cluster = require('cluster');
const { createServer } = require('http');
const { cpus } = require('os');

if (cluster.isMaster){
	let numReqs = 0;
	const messageHandler = msg => {
		if (msg.cmd && msg.cmd === 'notifyRequest'){
			numReqs += 1;
		}
	};

	for (let i = 0; i < cpus(); i += 1){
		cluster.fork();
	}
	for (const id in cluster.workers){
		cluster.workers[id].on('message', messageHandler);
	}
	setInterval(() => {
		console.log(`numReqs = ${numReqs}`);
	}, 1000);
} else {
	createServer((req, res) => {
		res.writeHead(200);
		res.end('hello world');
		process.send({
			cmd: 'notifyRequest'
		});
	}).listen(8080);
}