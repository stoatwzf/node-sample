var http = require('http');
var keepAliveAgent = require('./agent.js'); 
var agent = new keepAliveAgent({ maxSockets: 100 }); 
// Optionally define more parallel sockets 
var options = {
    agent: agent,
    hostname: 'example.com',
    path: '/path'}; 
// do get
http.get(options);
// do request
http.request(options,function(){});