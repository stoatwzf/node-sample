const { 
	AssertionError, 
	ok,
	equal,
	notEqual,
	strictEqual,
	notStrictEqual,
	deepEqual,
	notDeepEqual,
	deepStrictEqual,
	notDeepStrictEqual,
	throws,
	doesNotThrow,
	fail,
	ifError,
} = require('assert');

describe('ok() test', () => {
	it('-0 0', () => {
		ok(-0 === 0);
	});

	it('-0 -0', () => {
		ok(-0 === -0);
	});
});

describe('equal() test', () => {
	it('equal', () => {
		equal(1, '1');
	});

	it('notEqual', () => {
		notEqual(1, 2);
	});

	it('strictEqual', () => {
		strictEqual(1, 1);
	});

	it('notStrictEqual', () => {
		notStrictEqual(1, '1');
	});
});

describe('deepEqual() test', () => {
	class ClassA {}
	class ClassB {}
	const classA = new ClassA();
	const classB = new ClassB();
	const date = new Date();
	const obj = {};
	const fakeDate = {};

	Reflect.setPrototypeOf(fakeDate, Date.prototype);

	it('deepEqual', () => {
		deepEqual({ a: 1 }, { a: '1' });
	});

	it('notDeepEqual', () => {
		notDeepEqual({ a: 1 }, { a: 2 });
	});

	it('notDeepStrictEqual', () => {
		notDeepStrictEqual({ a: 1 }, { a: '1' });
	});

	it('prototype', () => {
		deepStrictEqual(fakeDate, Date.prototype);
	});

	it('Class', () => {
		deepStrictEqual(date, fakeDate);
	});

	it('SameValue', () => {
		deepStrictEqual(NaN, NaN);
	});

	it('Number', () => {
		deepStrictEqual(Number(1), Number(1));
	});

	it('String', () => {
		deepStrictEqual(new String('foo'), new String('foo'));
	});

	it('-0 -0', () => {
		deepStrictEqual(-0, -0);
	});

	it('-0 0', () => {
		deepStrictEqual(-0, 0);
	});

	it('Symbol', () => {
		const symbol1 = Symbol();
		const symbol2 = Symbol();

		deepStrictEqual({ [symbol1]: 1}, { [symbol2]: 1});
	});

	it('weakMap', () => {
		const weakMap1 = new WeakMap();
		const weakMap2 = new WeakMap([[{}, {}]]);
		const weakMap3 = new WeakMap();

		deepStrictEqual(weakMap1, weakMap2);
	});
});

describe('throws() test', () => {
	const err = new TypeError('error message');

	err.code = 404;
	err.foo = 'bar';
	err.info = {
		nested: true,
		baz: 'text'
	}
	err.reg = /acb/i;

	it('throws', () => {
		throws(() => {
			throw err;
		}, {
			name: 'TypeError',
			message: 'error message',
			info: {
				nested: true,
				baz: 'text'
			}
		});
	});

	it('TypeError', () => {
		doesNotThrow(() => {
			throw new TypeError('error message');
		}, TypeError);
	});

	it('AssertionError', () => {
		doesNotThrow(() => {
			throw new TypeError('error message');
		}, /error message/, 'yahoo');
	});
});

describe('fail() test', () => {
	it('fail', () => {
		fail('a AssertionError');
	});

	it('fail(actual, expected)', () => {
		fail(1, 2, new TypeError('need array'), '>');
	});

	it('ifError', () => {
		ifError(null);
	});
});




