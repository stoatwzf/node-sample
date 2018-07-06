console.log('b start');
exports.done = false;
const a = require('./a');
console.log(`a in b done:${a.done}`);
exports.done = true;
console.log('b end');