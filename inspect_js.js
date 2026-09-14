const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('ReBot_Arm_web_RS/assets/index-C1mUAY_x.js', 'utf8');

// Find all strings containing extension .wasm, .xml, .stl, .png, .json, .js, .css
const matches = code.match(/["'`][^"'`\n\r]*?\.(wasm|xml|stl|png|jpg|json|bin)[^"'`\n\r]*?["'`]/gi) || [];
console.log('File matches:', Array.from(new Set(matches.map(m => m.slice(1, -1)))));

// Find all URLs starting with http or /
const urls = code.match(/https?:\/\/[^\s"'`\)]+|\/ReBot[^\s"'`\)]+/gi) || [];
console.log('URL matches:', Array.from(new Set(urls)));
