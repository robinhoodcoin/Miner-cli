#!/usr/bin/env node
'use strict';

//node index.js '{"challenge": "f8b55e92d345bae0e644419982c2fadcf003289ac3ed638a5651e77ba24d4f5c", "target": "00000560a5e9cfe18772cc5cf6c5e29dc79d118ebcfc5ee72a2d56aff20c0fc6"}'

const web3 = require('web3');
const data = JSON.parse(process.argv[2]);
const challenge = '0x' + data.challenge;
const target = '0x' + data.target;
let nonce = 0;
let done = false;

while (!done) {
  let digest = web3.utils.soliditySha3(nonce, challenge);
  if (digest < target) {
    console.log('digest: ', digest);
    console.log('target: ', target);
    console.info('nonce: ', nonce);
    done = true;
  } else {
    nonce += 1;
  }
}
