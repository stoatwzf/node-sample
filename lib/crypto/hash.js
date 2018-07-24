/*const { createHash } = require('crypto');
const hash = createHash('sha256');

hash.on('readable', () => {
	const data = hash.read();

	if (data){
		console.log(data.toString('hex'));
	}
});
hash.write('some data to hash');
hash.end();*/

/*const { createHash } = require('crypto');
const { createReadStream } = require('fs');
const hash = createHash('sha256');
const input = createReadStream('test.js');

input.pipe(hash).pipe(process.stdout);*/

const { createHash } = require('crypto');
const hash = createHash('sha256');

hash.update('some data to hash');
console.log(hash.digest('hex'));