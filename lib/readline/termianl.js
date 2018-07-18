const { createInterface } = require('readline');
const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: '>'
});

rl.prompt();
rl.on('line', line => {
	switch (line.trim()){
		case 'hello':
			console.log('world!');
			break;
		default:
			console.log('what?');
			break;
	}
	rl.prompt();
});
rl.on('close', () => {
	console.log('bye');
	process.exit(0);
});