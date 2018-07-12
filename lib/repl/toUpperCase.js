const repl = require('repl');
const r = repl.start({
	prompt: '他说:',
	eval: (cmd, context, filename, cb) => {
		cb(null, cmd);
	},
	writer:  output => output.toUpperCase()
});

r.on('exit', () => {
	console.log('exited');
});
r.on('reset', () => {
	console.log('reseted');
});