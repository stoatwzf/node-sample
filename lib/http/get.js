const { get } = require('http');
const req = get('http://nodejs.org/dist/index.json', res => {
	const { statusCode } = res;
	const contentType = res.headers['content-type'];
	let error;

	if (statusCode !== 200){
		error = new Error('failed');
	} else if (!/^application\/json/.test(contentType)){
		error = new Error('Invalid');
	}
	if (error){
		throw error;
		res.resume();
		return;
	}
	res.setEncoding('utf8');
	let rawData = '';

	res.on('data', chunk => {
		rawData += chunk;
	});
	res.on('end', () => {
		try {
			const parseData = JSON.parse(rawData);
			console.log(parseData);
		} catch (err){
			console.error(err.message);
		}
	});
});

req.on('error', err => {
	console.error(err.message);
});