const {
	createInterface,
	clearLine,
	clearScreenDown,
	cursorTo,
	emitKeypressEvents,
	moveCursor,
} = require('readline');
const rl = createInterface({
	input: process.stdin,
	output: process.stdout
});;

rl.on('close', () => {});
rl.on('line', input => {});
rl.on('pause', () => {});
rl.on('resume', () => {});
rl.on('SIGCONT', () => {});
rl.on('SIGINT', () => {});
rl.on('SIGTSTP', () => {});
rl.question('how do you think nodejs.cn', an => {
	console.log(an);
	// rl.close();
	// rl.pause();
	// rl.resume();
	rl.prompt('asjd');
	rl.write('yahoo');
	rl.setPrompt('hello:');
	emitKeypressEvents(process.stdin);
});