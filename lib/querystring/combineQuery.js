const { parse, format } = require('url');
const combineQuery = (url, obj = {
		foo: 1,
		bar: 'yahoo',
		baz: true
	}) => {
	const urlObj = parse(url, true);

	Reflect.deleteProperty(urlObj, 'search');
	urlObj.query = Object.assign(urlObj.query, obj);
	return format(urlObj);
}

module.exports = combineQuery;