const { createDiffieHellman } = require('crypto');
const { strictEqual } = require('assert');

const alice = createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

const aliceSecert = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

strictEqual(aliceSecert.toString('hex'), bobSecret.toString('hex'));