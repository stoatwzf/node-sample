/*const { createCipher } = require('crypto');
const cipher = createCipher('aes192', 'a password');
let encrypted = '';

cipher.on('readable', () => {
	const data = cipher.read();

	if (data){
		encrypted += data.toString('hex');
	}
});
cipher.on('end', () => {
	console.log(encrypted);
});
cipher.write('some clear text data');
cipher.end();*/

/*const { createCipher } = require('crypto');
const { createReadStream, createWriteStream } = require('fs');
const cipher = createCipher('aes192', 'a password');
const input = createReadStream('test.js');
const output = createWriteStream('test.enc');

input.pipe(cipher).pipe(output);*/

const { createCipher } = require('crypto');
const cipher = createCipher('aes192', ' a password');
let encrypted = cipher.update('some clear text data', 'utf8', 'hex');

cipher.setAAD(Buffer.from('hello'), {});
cipher.setAutoPadding(20);
encrypted += cipher.final('hex');
console.log(encrypted);
console.log(cipher.getAuthTag);