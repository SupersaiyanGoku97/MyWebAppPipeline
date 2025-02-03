const assert = require('assert');
const fs = require('fs');

const html = fs.readFileSync('src/index.html', 'utf8');
assert(html.includes('<h1>Hello, World!</h1>'));
console.log('Test passed!');
