const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();
const seFn = (a, b) => {
	console.log('another event for someEvent');
};
const sePreFn = (a, b) => {
	console.log('prepend event someEvent');
};
myEmitter.on('error', (err) => {
	throw err;
});
myEmitter.on('newListener', (name, listener) => {
	console.log(`${name} event added`);
});
myEmitter.on('removeListener', (name, listener) => {
	console.log(`${name} event removed`);
});
myEmitter.on('someEvent', function (a, b){
	setImmediate(() => {
		console.log(a, b);
	});
});
myEmitter.on('someEvent', (a, b) => {
	console.log(this);
});
myEmitter.on('someEvent', seFn);
myEmitter.prependListener('someEvent', sePreFn);
myEmitter.once('onceEvent', () => {
	console.log('hello yahoo');
});
myEmitter.prependOnceListener('onceEvent', sePreFn);
myEmitter.emit('someEvent', 'hello', 'world');
myEmitter.emit('onceEvent');
myEmitter.emit('onceEvent');
myEmitter.setMaxListeners(myEmitter.getMaxListeners() + 1);
myEmitter.removeListener('someEvent', seFn);
myEmitter.removeAllListeners('someEvent');
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.eventNames());
console.log(myEmitter.listenerCount('someEvent'));
console.log(myEmitter.listeners('someEvent'));