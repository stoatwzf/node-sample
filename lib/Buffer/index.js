const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1, 2, 3]);
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test', 'latin1');
const buf7 = new ArrayBuffer(10);
const buf8 = Buffer.from(buf7);
const buf9 = Buffer.from('hello world', 'ascii');
const buf10 = Buffer.from([2, 4, 7]);


const u16a = new Uint16Array(2);
u16a[0] = 5000;
u16a[1] = 4000;
const buf11 = Buffer.from(u16a);
const buf12 = Buffer.from(u16a.buffer);
console.log(buf11, buf12);
u16a[1] = 6000;
console.log(buf11, buf12);

const arr = new Uint16Array(20);
const buf13 = Buffer.from(arr.buffer, 0 , 16);
console.log(buf13);

for (const b of buf11){
	console.log(b);
}

const buf14 = Buffer.alloc(10, 'hello', 'base64');
console.log(buf14);

const buf15 = Buffer.allocUnsafe(12);
buf15.fill('a', 'utf16le');
console.log(buf15);
console.log(Buffer.poolSize);

/*const store = [];
socket.on('readable', () => {
	const data = socket.read();
	const sb = Buffer.allocUnsafeSlow(10);

	data.copy(sb, 0, 0, 10);
	store.push(sb);
});*/

console.log(Buffer.byteLength('好', 'base64'));
console.log(Buffer.compare(buf1, buf2));


const buf16 = Buffer.from('1234');
const buf17 = Buffer.from('0123');
const arr1 = [buf16, buf17];
console.log(arr1.sort(Buffer.compare));


const buf18 = Buffer.alloc(10);
const buf19 = Buffer.alloc(14);
const buf20 = Buffer.alloc(18);
const totalLength = buf18.length + buf19.length + buf20.length;
const buf21 = Buffer.concat([buf18, buf19, buf20], totalLength);
console.log(buf21);

class Foo {
	[Symbol.toPrimitive] (){
		return 'this is a test';
	}
}
const buf22 = Buffer.from(new Foo(), 'utf8');
console.log(buf22);
console.log(Buffer.isBuffer(buf22), Buffer.isEncoding('utf8'));


const buf23 = Buffer.from('a');
console.log(buf23, buf23[0].toString('16'));

const str = 'Node.js';
const buf24 = Buffer.allocUnsafe(str.length);
for (let i = 0; i < str.length; i += 1){
	buf24[i] = str.codePointAt(i);
}
console.log(buf24, Buffer.from(str));

const arrayBuffer = new ArrayBuffer(16);
const buffer = Buffer.from(arrayBuffer);
const prototype1 = Reflect.getPrototypeOf(buffer);
const prototype2 = Reflect.getPrototypeOf(prototype1);
const prototype3 = Reflect.getPrototypeOf(prototype2);
const prototype4 = Reflect.getPrototypeOf(prototype3);
console.log(buffer.buffer === arrayBuffer);
console.log(prototype1, prototype2, prototype3, prototype4);

const buf25 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const buf26 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);
console.log(buf25.compare(buf26, 5, 9, 0, 4));

const buf27 = Buffer.allocUnsafe(26);
const buf28 = Buffer.allocUnsafe(26).fill('!');
for (let i = 0; i < 26; i += 1){
	buf27[i] = i + 97;
}
console.log(buf27, buf28);
buf27.copy(buf28, 8, 16, 20);
console.log(buf27, buf28.toString('utf8', 0, 25));

const buf29 = Buffer.from('buffer');
console.log(buf29.entries());
for (const [index, value] of buf29.entries()){
	console.log(value);
}

console.log(buf25.equals(buf26));

const buf30 = Buffer.alloc(6);
console.log(buf30);
buf30.fill('好');
console.log(buf30, buf30.includes('好'), buf30.indexOf('好'), buf29.lastIndexOf('f'), buf30.length);
for (const k of buf30.keys()){
	console.log(k);
}

const buf31 = Buffer.allocUnsafe(6);
buf31.write('hello world');
console.log(buf31, buf31.inspect());

const bufferdd = require('buffer');
const buf32 = bufferdd.transcode(Buffer.from('&'), 'utf8', 'ascii');
console.log(buf32.toString('ascii'));






