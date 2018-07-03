const { createServer } = require('http');
const { readFileSync } = require('fs');
const { parse } = require('url');
const queryString = require('querystring');

createServer((req, res) => {
	const { pathname, query } = parse(req.url);
	const ptn = pathname.match(/(?<=\/)\w*/)[0];
	let params = queryString.parse(query);

	if (ptn !== 'favicon.ico'){
		const index = readFileSync('client.html');
		const form = readFileSync('FormData.html');
		const reader = readFileSync('FileReader.html');
		const bufferSlice = readFileSync('bufferSlice.html');
		const img = readFileSync('a1.jpg');

		if (ptn === 'xhr'){
			let offset = +params.nextOffset;
			let isFinish = false;

			if (params.fileSize > params.dataSize * params.nextOffset){
				offset += 1;
			} else {
				isFinish = true;
			}
			console.log(params.nextOffset, offset);
			const data = JSON.stringify({
				isFinish,
				offset
			});
			res.end(data);
		} else if (ptn === 'index'){
			res.end(index);
		} else if (ptn === 'form'){
			res.end(form);
		} else if (ptn === 'reader'){
			res.end(reader);
		} else if (ptn === 'slice'){
			res.end(bufferSlice);
		}
	}
}).listen(8181, () => {
	console.log('Server has statred at port: 8181');
});