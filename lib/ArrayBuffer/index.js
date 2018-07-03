const buf = new ArrayBuffer(32);
const dataView = new DataView(buf);
const x1 = new Int32Array(buf);
const x2 = new Uint8Array(buf);
const x3 = new Uint8Array([0, 1, 2]);
const buf2 = buf.slice(0, 3);
const b1 = ArrayBuffer.isView(buf2);


const b = new ArrayBuffer(8);
const v1 = new Int32Array(b);
const v2 = new Uint8Array(b, 2);
const v3 = new Int16Array(b, 2, 2);


const f64a = new Float64Array(8);

f64a[0] = 10;
f64a[1] = 20;
f64a[2] = f64a[0] + f64a[1];
// console.log(f64a);


const x = new Int8Array([1, 1]);
const y = new Int8Array(x);

x[0] = 2;
console.log(x, y);


const xa = new Int8Array([1, 1]);
const ya = new Int8Array(xa.buffer);

xa[0] = 2;
console.log(xa, ya);



const typeArray = new Uint8Array([0, 1, 2, 3, 4]);
const arrayType = [...typeArray];

console.log(typeArray, arrayType);


const concatenate = (resultConstructor, ...arrays) => {
	let totalLength = 0;

	for (let arr of arrays){
		totalLength += arr.length;
	}

	let result = new resultConstructor(totalLength);
	let offset = 0;

	for (let arr of arrays){
		result.set(arr, offset);
		offset += arr.length;
	}
	return result;
}
const concatArr = concatenate(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4));

console.log(concatArr);


const a1 = Uint8Array.of(1, 2, 3);

for (const byte of a1){
	console.log(byte);
}


const a2 = new ArrayBuffer(16);
const int32View = new Int32Array(a2);
const Int16View = new Int16Array(a2);

console.log(int32View);
console.log(Int16View);

const a3 = new ArrayBuffer(4);
const b3 = new Uint8Array(a3);
b3[0] = 2;
b3[1] = 1;
b3[2] = 3;
b3[3] = 7;
const c3 = new Uint16Array(a3);
if (c3[0] === 258){
	console.log('OK');
}

console.log(Int8Array.BYTES_PER_ELEMENT);

const ab2str = buf => {
	if (buf && buf.byteLength < 1024){
		return String.fromCharCode(null, new Uint16Array(buf));
	}
	const bufView = new Uint16Array(buf);
	const len = bufView.length;
	const bstr = new Array(len);
	for (let i = 0; i < len; i += 1){
		bstr[i] = String.fromCharCode.call(bull, bufView[i]);
	}

	return bstr.join('');
}

console.log(ab2str(new ArrayBuffer(10)));


const a4 = new ArrayBuffer(12);
const b4 = new Uint8Array(a4, 4);
const c4 = new Uint8Array(a4);
c4.set(b4)
console.log(b4.byteLength, b4.buffer, b4.byteOffset, b4.length, c4);

const a5 = new Uint8Array(8);
const b5 = a5.subarray(6);
console.log(a5, b5);

const a6 = Uint8Array.of(1, 2, 3);
const b6 = a6.slice(-1);
console.log(a6, b6);

const a7 = Float32Array.of(0.1231, -2, 1);
const b7 = Uint16Array.from([3, 2, 2, 1]);
const c7 = Uint8Array.from(a7, x => x * 2);
console.log(a7, b7, c7);

const a8 = new ArrayBuffer(24);
const b8 = new Uint32Array(a8, 0, 1);
const c8 = new Uint8Array(a8, 4, 16);
const d8 = new Float32Array(a8, 20, 1);
console.log(b8, c8, d8);

const a9 = new ArrayBuffer(24);
const b9 = new DataView(a9);
console.log(b9, b9.byteLength, b9.length, b9.buffer);

const a10 = new ArrayBuffer(24);
const b10 = new DataView(a10);
const c10 = b10.getUint8(0);
const d10 = b10.getUint16(1);
const e10 = b10.getUint16(3, true);
b10.setInt32(0, 25, false);
b10.setInt32(4, 25);
b10.setFloat32(8, 2.5, true);
console.log(c10, d10, e10);





