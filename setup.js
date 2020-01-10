#!/usr/bin/env node

const shell = require('shelljs');

const path = './';

console.log('1. cloning project ⏳');
shell.cd(path);
shell.exec('git clone https://github.com/paul-pg/create-initializer.git');
console.log('2. done ⏰');
console.log('3. doing other important stuff 🕹');
shell.cd('/create-initializer');

// origin van geclonede project veranderen! anders pushen naar bestaand project
// eventueel parameters in package.json aanpassen
// https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html

// 1. gitlab project met bin/index.js
// 2. index.js cloned hetzelfde gitlab project
// 3. changes maken aan nieuw gekopieerd lokaal project
// als gitlab niet werkt, via @freshfruit
