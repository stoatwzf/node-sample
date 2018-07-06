console.log('a start');
exports.done = false;
const b = require('./b');
console.log(`b in a done:${b.done}`);
exports.done = true;
console.log('a end');
