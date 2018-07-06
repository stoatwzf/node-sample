const path = require('path');
const pathPOSIX = '/Users/stoat/Documents/practice/node-sample/lib/path/index.js';
const pathWindows = 'C:\\temp\\myfile.html';

console.log(path.win32.basename(pathWindows, '.js'));
console.log(path.win32.basename(pathPOSIX, '.js'));
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));
console.log(path.win32.dirname(pathPOSIX));
console.log(path.extname(pathWindows));
console.log(path.parse(pathWindows));
console.log(path.parse(pathPOSIX));
console.log(path.format({ root: '/',
  dir: '/Users/stoat/Documents/practice/node-sample/lib/path',
  base: 'index.js',
  ext: '.js',
  name: 'index' }));
console.log(path.isAbsolute(pathPOSIX));
console.log(path.join('/Users', 'stoat/Documents', '../../stoat/Documents', '../index.js'));
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
console.log(path.win32, path.posix);
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
console.log(path.sep);