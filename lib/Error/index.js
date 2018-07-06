console.log(new Error('a'));
const obj = {};
Error.captureStackTrace(obj);
console.log(obj.stack)