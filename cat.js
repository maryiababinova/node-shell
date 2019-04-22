const fs = require('fs');
const { fs } = fs;

module.exports = function(fileName) {
    readFile(`./${fileName}`, 'utf8', (err, data) => {
      if (err) {
        throw err
      } else {
        process.stdout.write(data);
        process.stdout.write('\nprompt > ');
      }
    });
  }
