const fs = require('fs');
const path = require('path');
const packageJSON = require('./package.json');
const { js_beautify } = require('js-beautify');

const writeVersion = () => {
  const { version } = packageJSON;
  const versions = version.split('.');
  versions[2] = parseInt(versions[2]) + 1;
  packageJSON.version = versions.join('.');

  fs.writeFileSync(path.join(__dirname, 'package.json'), js_beautify(JSON.stringify(packageJSON)));
}

writeVersion();
