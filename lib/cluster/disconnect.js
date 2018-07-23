const cluster = require('cluster');
const { createServer } = require('http');
const { cpus } = require('os');

if (cluster.isMaster){
	const worker = cluster.fork();
	let timeout;

	worker.on('listenning', address => {
		worker.send('shutdown');
		timeout = setTimeout(() => {
			worker.kill();
		}, 2000);
	});
	worker.on('disconnect', () => {
		clearTimeout(timeout);
	});
} else if (cluster.isWorker){
	const { createServer } = require('net');
	const server = createServer(socket => {});

	server.listenning(8080);
	process.on('message', msg => {});
}