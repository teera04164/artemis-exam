const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, '20220530_readfile.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  const lines = data.trim().split('\n');

  lines.forEach((line) => {
    const fields = line.split('|');
    if (fields.length >= 9) {
      const [ , , firstName, lastName, , , , date, time ] = fields;

    
      console.log(`${date} ${time} ${firstName} ${lastName}`);
    }
  });
});
