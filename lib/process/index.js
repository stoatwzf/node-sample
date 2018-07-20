const doFn = name => `hello ${name}`;
const emitMyWarning = () => {
	if (!emitMyWarning.warned){
		emitMyWarning.warned = true;
		process.emitWarning('Only warn once');
	}
};

process.on('beforeExit', () => {
	console.log('before exit');
});
process.on('exit', code => {
	console.log(`exit code ${code}`);
});

// ipc
process.on('disconnect', () => {});
process.on('message', (message, handle) => {});

// promise
process.on('rejectionHandled', p => {});
process.on('unhandleRejection', (reason, p) => {});


// exception
process.on('uncaughtException', err => {});
process.on('warning', warn => {
	console.log(warn.name, warn.message, warn.stack);
});

process.on('SIGINT', () => {});
/*try {
	process.chdir('tmp');
	console.log(`New directory: ${process.cwd()}`);
} catch (err){
	console.error(`chdir: ${err}`);
}*/
/*process.emitWarning('Something happend', {
	code: 'MY_WArNING',
	detail: 'This is some additional information'
});*/

// process.abort();
// process.disconnect();

// console.log(doFn('stoat'));
// console.log(process.arch);
// console.log(process.argv);
// console.log(process.argv0);
// console.log(process.channel);
// console.log(process.config);
// console.log(process.connected);
// console.log(process.cpuUsage());
// console.log(process.cwd());
// console.log(process.debugPort);
// console.log(process.dlopen);
// console.log(process.env);



/*console.log(process.execArgv);
console.log(process.execPath);
console.log(process.exitCode);
console.log(process.getegid());
console.log(process.getgid());
console.log(process.geteuid());
console.log(process.getuid());
console.log(process.hrtime());
console.log(process.getgroups());
process.exit(2);
*/


process.kill(process.pid)
















