const promiseLogger = require('./promiseLogger');

promiseLogger.then(logger => {
	logger.log('hello yahoo');
});