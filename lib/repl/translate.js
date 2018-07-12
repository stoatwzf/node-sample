const repl = require('repl');
const myEval = (cmd, context, filename, cb) => {
	let result;

	try {
		result = vm.runInThisContext(cmd);
	} catch (err){
		if (isRecoverableError(err)){
			return cb(new repl.Recoverable(err));
		}
	}
	cb(null, result);
};
const isRecoverableError = err => {
	if (err.name === 'SyntaxError'){
		return /^(Unexpected end of input | Unexpected token)/.test(err.message)
	}
	return false;
};

repl.start({
	prompt: '>',
	eval: myEval
});