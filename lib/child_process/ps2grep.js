const { openSync } = require('fs');
const { spawn } = require('child_process');
const out = openSync('out.log', 'a');
const err = openSync('out.log', 'a');
const subprocess = spawn('prg', [], {
	detached: true,
	stdio: ['ignore', out, err]
});

subprocess.unref();