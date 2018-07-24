/*const { createDecipher } = require('crypto');
const decipher = createDecipher('aes192', 'a password');
let decrypted = '';

decipher.on('readable', () => {
	const data = decipher.read();

	if (data){
		decrypted += data.toString('utf8');
	}
});
decipher.on('end', () => {
	console.log(decrypted);
});
const encrypted = 'ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504';
decipher.write(encrypted, 'hex');
decipher.end();*/

/*const { createDecipher } = require('crypto');
const { createReadStream, createWriteStream } = require('fs');
const decipher = createDecipher('aes192', 'a password');
const input = createReadStream('test.enc');
const output = createWriteStream('test.js');

input.pipe(decipher).pipe(output);*/

const { createDecipher } = require('crypto');
const decipher = createDecipher('aes192', 'a password');
const encrypted = 'ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');

decipher.serAAD();
decipher.setAuthTag();
decipher.setAutoPadding(20);
decrypted += decipher.final('utf8');
console.log(decrypted);