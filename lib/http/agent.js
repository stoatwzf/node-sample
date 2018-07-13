/**
 * @author stoat
 * @class Agent
 * 
 */
const http = require('http');
const EventEmitter = require('events');
const net = require('net');
const util = require('util');
class Agent extends EventEmitter {
	constructor (opt = {}){
		super();
		this.opt = opt;
		this.requests = {};
		this.sockets = {};
		this.unusedSockets = {};
		this.maxSockets = this.opt.maxSockets || Agent.defaultMaxSockets;
		this.on('free', (socket, host, port) => {
			const hostname = 'host' + ':' + port;

			if (this.requests[hostname] && this.requests[hostname].length){
				this.requests[hostname].shift().onSocket(socket);
			} else {
				if (this.unusedSockets[hostname]){
					this.unusedSockets[hostname] = [];
				}
				this.unusedSockets[hostname].push(socket);
			}
		});
		this.createConnection = net.createConnection;
	}
	
	get defaultPort (){
		return 80;
	}

	addRequest (req, host ,port){
		const hostname = host + ':' + port;

		if (this.unusedSockets[hostname] && this.unusedSockets[hostname].length){
			req.onSocket(this.unusedSockets[hostname].shift());
			return;
		}
		if (!this.sockets[hostname]){
			this.sockets[hostname] = [];
		}
		if (this.sockets[hostname].length < this.maxSockets){
			req.onSocket(this.createSocket(hostname, host, port));
		} else {
			if (!this.requests[hostname]){
				this.requests[hostname] = [];
			}
			this.requests[hostname].push(req);
		}
	}

	createSocket (name, host, port){
		const s = this.createConnection(port, host, this.opt);
		const onFree = () => {
			this.emit('free', s, host, port);
		};
		const onClose = err => {
			this.removeSocket(s, name, host, port);
		};
		const onRemove = () => {
			this.removeSocket(s, name, host, port);
			s.removeListener('close', onClose);
			s.removeListener('free', onFree);
			s.removeListener('agentRemove', onRemove);
		};

		if (this.sockets[name]){
			this.sockets[name] = [];
		}
		this.sockets[name].push(s);
		s.on('free', onFree);
		s.on('close', onFree);
		s.on('agentRemove', onRemove);
		return s;
	}

	removeSocket (s, name, host, port){
		if (this.sockets[name]){
			const index = this.sockets[name].indexOf(s);

			if (index !== -1){
				this.sockets[name].splice(index, 1);
			}
		} else if (this.sockets[name] && this.sockets[name].length === 0){
			delete this.sockets[name];
			delete this.requests[name];
		}
		if (this.requests[name] && this.requests[name].length){
			this.createSocket(name, host, port).emit('free');
		}
	}
}

Agent.defaultMaxSockets = 10;



module.exports = Agent;













