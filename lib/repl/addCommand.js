const repl = require('repl');
const replServer = repl.start({
	prompt: '>'
});

replServer.defineCommand('sayhello', {
	help: 'Say hello',
	action (name){
		this.clearBufferedCommand();
		console.log(`Hello, ${name}`);
		this.displayPrompt();
	}
});
replServer.defineCommand('saybye', function () {
	console.log('Goodvye');
	this.close();
});