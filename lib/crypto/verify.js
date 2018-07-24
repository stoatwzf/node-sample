/*const { createVerify } = require('crypto');
const verify = createVerify('SHA256');

verify.write('some data to sign');
verify.end();

const publicKey = getPublicKeySomehow();
const signature = getSignatureToVerify();

console.log(verify.verify(publicKey, signature));*/


const { createVerify } = require('crypto');
const verify = createVerify('SHA256');

verify.update('some data to sign');

const publicKey = getPublicKeySomehow();
const signature = getSignatureToVerify();

console.log(verify.verify(publicKey, signature));