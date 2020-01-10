#!/usr/bin/env node

const shell = require('shelljs');

const path = './';

shell.cd(path);
shell.exec('git clone https://github.com/paul-pg/create-initializer');
console.log('done');
