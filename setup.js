// test

import { createProject } from 'npm-initializer-template';
console.log('testing')

await createProject({
  workingDirectory: './', // Directory where the project will be cloned
  npmPackage: {
    name: '@paul-pg/initializer', // NPM Package to clone
    // version: '1.12.1', // Optional, default to latest
  },
});
