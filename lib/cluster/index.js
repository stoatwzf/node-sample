const cluster = require('cluster');
const { createServer } = require('http');
const { cpus } = require('os');

if (cluster.isMaster){
	console.log(`master process ${process.pid} is working.`);
	for (let i = 0; i < cpus().length; i += 1){
		cluster.fork();
	}
	cluster.on('exit', (worker, code, signal) => {
		console.log(`child process ${worker.process.pid} is exited.`);
	});
} else {
	createServer((req, res) => {
		res.writeHead(200);
		res.end('hello world\n');
	}).listen(8080, () => {
		console.log(`child process ${process.pid} is working`);
	});
}
cluster.workers[id].on('disconnect', () => {});
cluster.workers[id].on('error', err => {});
cluster.workers[id].on('exit', (code, signal) => {});
cluster.workers[id].on('listenning', () => {});
cluster.workers[id].on('online', () => {});
cluster.workers[id].isDead();
cluster.workers[id].kill();
cluster.workers[id].process;
cluster.workers[id].send(message);
cluster.on('exit', (worker, code, signal) => {
	if (worker.exitedAfterDisconnect === true){
		console.log('Oh, it was just voluntary -no need to worry.');
	}
});
cluster.on('fork', () => {});
cluster.on('listenning', () => {});
cluster.on('message', () => {});
cluster.on('online', worker => {});
cluster.on('setup', () => {});
cluster.disconnect(() => {});
cluster.settings;
cluster.setupMaster({
	exec: 'worker.js',
	args: ['--use', 'https'],
	silent: true
});