const repl = require('repl');
const msg = 'message';

Reflect.defineProperty(repl.start('>').context, 'm', {
	configurable: false,
	enumerable: true,
	value: msg
});