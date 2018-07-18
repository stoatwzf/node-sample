const { createInterface } = require('readline');
const { createReadStream, createWriteStream } = require('fs');
const rl = createInterface({
	input: createReadStream('index.js'),
	output: createWriteStream('out.log'),
	crlfDelay: Infinity
});

rl.on('line', line => {
	console.log(`> ${line}`);
});