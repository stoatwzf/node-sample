const { 
	spawn,
	exec, 
	execSync, 
	execFile, 
	execFileSync,
	fork,
} = require('child_process');
const ls = spawn('ls', ['-lh', '/usr'], {
	stdio: 'pipe'
});
const defaults = {
	encoding: 'utf8',
	timeout: 0,
	maxBuffer: 200 * 1024,
	killSignal: 'SIGTERM',
	cwd: null,
	env: null
};

ls.stdout.on('data', data => {
	console.log(`${data}`);
});
ls.stderr.on('data', data => {
	console.log(`${data}`);
});
ls.on('close', code => {
	console.log(`child process exit code: ${code}`);
});
/*exec('echo $HOME', defaults, (err, stdout, stderr) => {
	if (err) throw err;
	console.log(stdout);
});
execFile('node', ['--version'], (err, stdout, stderr) => {
	if (err) throw err;
	console.log(stdout);
});*/