#!/usr/bin/env node
const createProject = require('npm-initializer-template');

console.log('create project');

function main() {
  createProject({
    workingDirectory: './', // Directory where the project will be cloned
    npmPackage: {
      name: '@paul-pg/create-initializer', // NPM Package to clone
      // version: '1.12.1', // Optional, default to latest
    },
  });
}
main();
