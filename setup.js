#!/usr/bin/env node
const fs = require('fs-extra');

console.log('this works');

fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))
  .catch(err => console.error(err));
