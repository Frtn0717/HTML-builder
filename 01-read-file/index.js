const fs = require('node:fs');

const rr = fs.createReadStream('./01-read-file/text.txt');

rr.on('readable', () => {
  console.log(`${rr.read()}`);
  rr.close();
});
