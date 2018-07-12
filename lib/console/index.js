const { Console } = require('console');
const fs = require('fs');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// custom simple logger
const logger = new Console(output, errorOutput);
// use it like console
const count = 5;

logger.count()
logger.count()
logger.count()
logger.count('abc')
logger.count('abc')
logger.count('abc')
logger.countReset('abc');
logger.count('abc');
logger.dir({
	a:1
});
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);