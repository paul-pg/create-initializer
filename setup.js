#!/usr/bin/env node
const fs = require('fs-extra');

console.log('this works');

fs.copy('https://github.com/paul-pg/create-initializer.git', '/tmp/mynewfile')
  .then(() => console.log('success!'))
  .catch(err => console.error(err));
