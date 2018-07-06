console.log('main start');
const a = require('./a');
const b = require('./b');
const emit = require('./emit');

console.log(`all done:${a.done},${b.done}`);
emit.on('ready', () => {
	console.log('emit ready');
});
console.log(module.loaded);