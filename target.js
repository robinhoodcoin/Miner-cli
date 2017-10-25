#!/usr/bin/env node
'use strict';

//node target.js 96493407697763496186309154173906589877724987221367136699547986673260941368

const bn = require('bn.js');
const input = process.argv[2];

var target = new bn(input, 10);

console.log('target: ', target.toString(16, 32));
