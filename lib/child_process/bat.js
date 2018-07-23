/**
 * only windows
 */
const { spawn, exec } = require('child_process');
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', data => {});
bat.stderr.on('data', data => {});
bat.on('exit', code => {});
exec('my.bat', (err, stdout, stderr) => {
	if (err){
		console.error(err);
		return;
	}
	console.log(stdout);
});