const { URL, URLSearchParams, domainToASCII, domainToUnicode, format, resolve } = require('url');
const myURL = new URL('https://example.org/?abc=123');

console.log(console.log(myURL.searchParams));
console.log(myURL.searchParams.get('abc'));
myURL.searchParams.append('abc', 'xyz');
console.log(myURL.href);
myURL.searchParams.delete('abc');
console.log(myURL.href);
myURL.searchParams.set('a', 'b');
console.log(myURL.href);

const newSearchParams = new URLSearchParams(myURL.searchParams);

console.log(newSearchParams);
newSearchParams.append('a', 'c');
console.log(myURL.href);                                                                                                                                                                                                                                                                                                                                                                                                                                   
console.log(newSearchParams.toString());
myURL.search = newSearchParams;
console.log(myURL.href);
console.log(newSearchParams)
for (const [key, val] of newSearchParams.entries()){
	console.log(`${key}: ${val}`);
}

console.log(domainToASCII('español.com'));
console.log(domainToASCII('中文.com'));
console.log(domainToUnicode('xn--fiq228c.com'));

const urlA = new URL('https://a:b@你好你好?abc#foo');
console.log(urlA.href);
console.log(format(urlA, {
	fragment: false,
	unicode: true,
	auth: false
}));


console.log(resolve('/one/two/three', 'four'));