const bf = require('../lib/ArrayBuffer/mdBuffer');
const { ok } = require('assert');

describe('ArrayBuffer', () => {
	it('alloc()', () => {
		ok(bf.byteLength === 10);
	});
});