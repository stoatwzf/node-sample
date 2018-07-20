process.on('SIGHUP', () => {
	console.log(process.mainModule);
});

/*setTimeout(() => {
	process.exit(0);
}, 100);
setImmediate(() => {});

process.kill(process.pid, 'SIGHUP');
console.log(process.memoryUsage());
process.nextTick(() => {
	console.log('next tick');
});
console.log(process.platform);
console.log(process.ppid);
console.log(process.release);
process.send('yahoo');
process.setegid(id);
process.seteuid(id);
process.setgid(id);
process.setuid(id);
process.setgroups(groups);*/
console.log(process.stderr);
console.log(process.stdin);
process.stdout.write('请输入num1的值：');