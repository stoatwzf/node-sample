/**
 * socket client
 */
const { connect } = require('net');
const client = connect({
	port: 3000
});

client.on('connect', () => {
	console.log('data from client');
});
client.on('data', chunk => {
	console.log(`${chunk}`);
	client.end();
});