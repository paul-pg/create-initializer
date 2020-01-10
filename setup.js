#!/usr/bin/env node

const shell = require('shelljs');

const path = './';

shell.cd(path);
shell.exec('git clone https://gitlab.com/GreenhouseGroup/creativedevelopment/opel-chat.git');
console.log('done ⏰');
