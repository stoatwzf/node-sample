const { rename, stat, open, close, readFile, fstat, watch } = require('fs');
const { basename } = require('path');
const fsWatch = watch('./')

fsWatch.on('error', err => {
	throw error;
});
fsWatch.on('close', fd => {
	console.log('closed');
});
fsWatch.on('change', (ft, fn) => {
	console.log(ft, fn);
});
setTimeout(() => {
	fsWatch.close();
}, 3000);


















