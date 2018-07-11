const imm = setImmediate(() => {
	console.log(2);
});
const tmo = setTimeout(() => {
	console.log(3)
}, 3000);

imm.unref();
tmo.unref();
// clearTimeout(tmo);
console.log(1);
// clearImmediate(imm);