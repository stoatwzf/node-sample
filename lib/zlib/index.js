const { createGzip, unzip } = require('zlib');
/*const { createReadStream, createWriteStream } = require('fs');
const input = createReadStream('input.txt');
const output = createWriteStream('input.txt.gz');

input.pipe(createGzip()).pipe(output);*/

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');

unzip(buffer, (err, buf) => {
	if (err) throw err;
	console.log(`${buf}`);
});