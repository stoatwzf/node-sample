const { Writable, Readable } = require('stream');
const { StringDecoder } = require('string_decoder');
class MyReadable extends Readable {
	constructor (opt){
		super(opt);
		this._source = getLowLeveSourceObject();
		this._source.ondata = chunk => {
			if (!this.push(chunk)){
				this._source.readStop();
			}
		}
		this._source.onend = () => {
			this.push(null)
		}
	}

	_read (size){
		this._source.readStart();
	}
}
class StringWritable extends Writable {
	constructor (opt){
		super(opt);
		const state = this._writableState;

		this._decoder = new StringDecoder(state.defaultEncoding);
		this.data = '';
	}

	_write(chunk, encoding, cb){
		if (encoding === 'buffer'){
			chunk = this._decoder.write(chunk);
		}
		this.data += chunk;
		cb();
	}

	_final (cb){
		this.data += this._decoder.end();
		cb();
	}
}
const euro = [[0xE2, 0x82], [0xAC]].map(Buffer.from);
const w = new StringWritable();

w.write('currency: ');
w.write(euro[0]);
w.write(euro[1]);

console.log(w.data);