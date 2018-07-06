const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('log', () => {
	console.log('log once');
});

const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];


emitter.on('log', () => {
	console.log('log persistently');
});

const newListeners = emitter.rawListeners('log');

console.log(listeners, newListeners);