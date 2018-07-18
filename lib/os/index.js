const {
	EOL,
	arch,
	constants,
	cpus,
	endianness,
	freemem,
	homedir,
	hostname,
	loadavg,
	networkInterfaces,
	platform,
	release,
	tmpdir,
	totalmem,
	type,
	uptime,
	userInfo,
} = require('os');

console.log(EOL);
console.log(arch());
console.log(constants);
console.log(cpus());
console.log(endianness());
console.log(freemem());
console.log(homedir());
console.log(hostname());
console.log(loadavg());
console.log(networkInterfaces());
console.log(platform());
console.log(release());
console.log(tmpdir());
console.log(totalmem());
console.log(type());
console.log(uptime());
console.log(userInfo());