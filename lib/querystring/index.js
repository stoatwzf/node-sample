const url = require('url');
const combineQuery = require('./combineQuery');
const { escape, unescape, parse, stringify } = require('querystring');
const localUrl = 'http://nodejs.cn/api/querystring.html?auth=stoat&pass=123&data=2018-07-12';
const urlObj = url.parse(localUrl);
const newParams = {
	foo: 1,
	bar: 2,
	baz: true
};

console.log(escape(localUrl), unescape(escape(localUrl)));
console.log(parse(urlObj.query), stringify(parse(urlObj.query)));
console.log(urlObj);
console.log(stringify(newParams));
console.log(combineQuery(localUrl));
