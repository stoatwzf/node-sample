/*const { lookup, resolve4, reverse } = require('dns');

lookup('nodejs.cn', (err, address, family) => {
	console.log(address);
});
resolve4('archive.org', (err, addresses) => {
	if (err) throw err;
	console.log(addresses);

	addresses.map(val => {
		reverse(val, (err, hostname) => {
			if (err) throw err;
			console.log(hostname);
		});
	});
});*/

const { Resolver, getServers, lookupService } = require('dns');
const resolver = new Resolver();

/*resolver.setServers(['4.4.4.4']);
resolver.resolve4('nodejs.cn', (err, addresses) => {
	if (err) throw err;
	console.log(addresses);
});
resolver.cancel();*/
// console.log(getServers());
lookupService('127.0.0.1', 22, (err, hostname, service) => {
	console.log(hostname, service);
});