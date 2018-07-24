const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret);

hash.update('I love cupcakes');
hash.digest('hex');
console.log(hash);