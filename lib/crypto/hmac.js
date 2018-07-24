/*const { createHmac } = require('crypto');
const hmac = createHmac('sha256', 'a secret');

hmac.on('readable', () => {
	const data = hmac.read();

	if (data){
		console.log(data.toString('hex'));
	}
});
hmac.write('some data to hash');
hmac.end();*/


/*const { createHmac } = require('crypto');
const { createReadStream } = require('fs');
const hmac = createHmac('sha256', 'a secret');
const input = createReadStream('test.js');

input.pipe(hmac).pipe(process.stdout);*/


const { createHmac } = require('crypto');
const hmac = createHmac('sha256', 'a secret');

hmac.update('some data to hash');
console.log(hmac.digest('hex'));