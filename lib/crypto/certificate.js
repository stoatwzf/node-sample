const crypto = require('crypto');
const cert1 = new crypto.Certificate();
const cert2 = crypto.Certificate();
const challenge = cert1.exportChallenge(spkac);
const publicKey = cert2.exportPublicKey(spkac);
const verify = cert1.verifySpkac(Buffer.from(spkac));