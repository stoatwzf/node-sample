const util = require('util');
const fn = () => Promise.resolve('yahoo');
const cbFn = util.callbackify(fn);

cbFn((err, data) => {
	if (err) throw err;
	console.log(data);
});