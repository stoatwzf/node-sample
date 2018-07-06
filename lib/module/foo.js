const circle = require('./circle');
const Square = require('./square');
const sq = new Square(3);

console.log(circle.area(2));
console.log(sq.area());
console.log(require.main === module);
console.log(require.resolve('./square'));
// console.log(require.cache);
console.log(require.resolve.paths('./square'));
console.log(module.children[0])