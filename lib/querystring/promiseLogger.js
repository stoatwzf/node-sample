const { escape } = require('querystring');
const url = 'http://nodejs.cn/api/querystring.html';
const { Console } = console;
const { createWriteStream, mkdir, access, constants } = require('fs');
const promiseLogger = new Promise((resolve, reject) => {
	access('logs', constants.F_OK, err => {
		if (err) {
			mkdir('logs', err => {
				if (err) reject(err);
			});
		};
		
		const stdout = createWriteStream('logs/stdout.log');
		const stderr = createWriteStream('logs/stderr.log');

		resolve(Console(stdout, stderr))
	});
});



module.exports = promiseLogger;
