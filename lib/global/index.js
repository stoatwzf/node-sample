const bf = Buffer.allocUnsafe(20);

bf.fill(0)
console.log(bf);
console.log(module, exports, require, __dirname, __filename);
console.log(setImmediate, setInterval, setTimeout);
console.log(clearImmediate, clearInterval, clearTimeout);
console.log(console);
console.log(global, global.Buffer);
console.log(process);
// console.log(URL);
// console.log(URLSearchParams);