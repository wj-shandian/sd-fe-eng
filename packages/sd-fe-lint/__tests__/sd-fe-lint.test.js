'use strict';

const sdFeLint = require('..');
const assert = require('assert').strict;

assert.strictEqual(sdFeLint(), 'Hello from sdFeLint');
console.info('sdFeLint tests passed');
